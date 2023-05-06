// pages/order/order.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      // 获取屏幕高度
      Hei: 0,
      // 默认显示内容 0-全部订单  1-待付款  2-待收货
      tabIndex: 0,
      // 顶部导航内容
      tabContent: [{
            name: '全部订单'
         },
         {
            name: '待付款'
         },
         {
            name: '待收货'
         }
      ],
      // 全部订单数据
      allOrderList: [],


      // 待付款数据
      obligationList: [],
      // 待收货数据
      receivedList: [],

   },

   // 封装云函数--修改
   updateFun(good,btnText,msg){
// 调用云函数-----修改数据
      wx.cloud.callFunction({
         name: 'haida-updateData',
         data: {
            id:good._id,
            newData:{
               btnText:'删除'
            }

         },
         success:res => {
            console.log(msg+'成功==>',res)
         },
         fail:err => {
            console.log(msg+'失败==>',err)
         }

      })

   },
   //全部订单的点击事件
   allorderBtn(event) {
      console.log('全部订单的点击事件')
      var _this = this 
      // 获取当前点击商品的下标值
       var index = event.currentTarget.dataset.index
       // 获取当前点击的商品数据
       var good = this.data.allOrderList[index]
if(good.btnText =='删除'){
console.log('删除按钮')
wx.cloud.callFunction({
   name: 'haida-deleteData',
   data: {
      id:good._id,
     
      },

   
   success:res => {
      console.log('删除数据成功==>',res)
   },
   fail:err => {
      console.log('删除数据失败==>',err)
   }

})
// 重新渲染页面
_this.data.allOrderList.splice(index,1)
_this.setData({
   allOrderList:_this.data.allOrderList
})
}else if(good.btnText == '去付款'){
console.log('去付款按钮')
 _this.updateFun(good,'确认收货','去付款')
}else{
   console.log('确认收货')
    _this.updateFun(good,'删除','确认收货')
}

   },
   //代付款的点击事件
   obligationBtn(event) {
      console.log('代付款的点击事件')
      var _this = this 
      // 获取当前点击商品的下标值
       var index = event.currentTarget.dataset.index
       // 获取当前点击的商品数据
       var good = this.data.obligationList[index]
       if(good.btnText =='去付款'){
         console.log('去付款按钮')
         wx.cloud.callFunction({
            name: 'haida-deleteData',
            data: {
               id:good._id,
              
               },
         
            
            success:res => {
               console.log('付款成功==>',res)
            },
            fail:err => {
               console.log('付款失败==>',err)
            }
         
         })
         // 重新渲染页面
         _this.data.obligationList.splice(index,1)
         _this.setData({
            obligationList:_this.data.obligationList
         })
         }
   },
   //待收货的点击事件
   receivedBtn(event) {
      console.log('待收货的点击事件')
      // 获取当前点击商品的下标值
      var index = event.currentTarget.dataset.index
      // 获取当前点击的商品数据
      var good = this.data.receivedList[index]
      // good.btnText = '删除'
      // console.log(good)
      // 调用云函数----修改数据
      // wx.cloud.callFunction({
      //    name: 'haida-updateData',
      //    data: {
      //       id:good._id,
      //       newData:{
      //          btnText:'删除'
      //       }

      //    },
      //    success:res => {
      //       console.log('确认收货成功==>',res)
      //    },
      //    fail:err => {
      //       console.log('确认收货失败==>',err)
      //    }

      // })
      // 调用云函数--修改
      this.updateFun(good,'删除','确认收货')
      // 重新渲染页面--修改初始化数据
      // splice(index,num)数组删除数据 index-下标值 num-删除个数
      // var receivedList = this.data.receivedList.splice(index,1)
      this.data.receivedList.splice(index,1)
      // 获取全部订单数据，找到对应_id的数据修改按钮文本
      var allOrderList = this.data.allOrderList
      allOrderList.forEach(item => {
         if(item._id == good._id){
            item.btnText = '删除'
         }
      })
      console.log('receivedList2==>',this.data.receivedList)
      this.setData({
         receivedList:this.data.receivedList,
         allOrderList
      })

   },
   // 获取导航的下标志
   getTabIndex: function (e) {
      // console.log(e)
      var index = e.target.dataset.index
      this.setData({
         tabIndex: index
      })
   },

   // 获取内容的下标值
   getContentIndex: function (e) {
      // console.log(e)
      var index = e.detail.current
      this.setData({
         tabIndex: index
      })
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      // 从个人中心进入我的订单，不执行以下代码
      if (options.index != undefined) {
         this.setData({
            tabIndex: options.index
         })
      }
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function () {
      // 调用云函数----获取数据
      var _this = this
      wx.cloud.callFunction({
         name: 'haida-getData',
         success: res => {
            console.log('获取我的订单数据成功==>', res)
            // 获取数据数组
            var goods = res.result.data
            var allOrderList = []
            var obligationList = []
            var receivedList = []
            //获取数组的循环遍历
            goods.forEach(item => {
               allOrderList.unshift(item)
               if (item.btnText == '确认收货') {
                  receivedList.unshift(item)
               }
               if (item.btnText == '去付款') {
                  obligationList.unshift(item)
               }
            })

            _this.setData({
               allOrderList,
               obligationList,
               receivedList
            })
         },
         fail: err => {
            console.log('获取我的订单数据失败==>', err)
         }
      })

      // 获取屏幕的高度
      var winHei = wx.getSystemInfoSync().windowHeight
      this.setData({
         Hei: winHei,
      })
   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function () {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload: function () {
      // 跳转到个人中心
      wx.switchTab({
         url: '/pages/my/my',
      })
   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function () {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function () {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function () {

   }
})