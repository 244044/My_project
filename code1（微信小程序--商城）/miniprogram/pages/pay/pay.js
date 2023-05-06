// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 支付页面的商品数组
payList:[],
id:0,
totalPrice:0,
// 判断是否有收货地址
isSite:true,
  },

  // 前往支付
  toPay(){
    var _this = this
    // 获取当前支付页面的商品数据
    var payList = this.data.payList
    // console.log('前往支付')
    // 当用户有收货地址是才能付款
    if(this.data.isSite){
      var index = 0
// 现实模态框
wx.showModal({
  title: '确认付款？',
  content: '付款金额为'+_this.data.totalPrice,
  success (res) {
    if (res.confirm) {
      console.log('用户点击确定')
      index = 2
      payList.forEach(item =>{
        item.btnText = '确认收货'
      })
    } else if (res.cancel) {
      console.log('用户点击取消')
      index = 1
      payList.forEach(item =>{
        item.btnText = '去付款'
      })
    }
    // 判断是否支付 1-取消 2-确定
    console.log('index==>', index)
    // 修改后的支付数据
    console.log('payList==>', payList)
    // 将支付数据循环遍历
    payList.forEach(item => {
      // 调用云函数------添加数据
      wx.cloud.callFunction({
        name:'haida-addData',//云函数名称
        data:item,//添加数据，格式为object---对象
        success:res => {
          console.log('支付添加数据成功==> ',res)
// 跳转我的订单页面
wx.navigateTo({
  url: '/pages/order/order?index='+index,
})
        },
        fail:err => {
          console.log('支付添加数据失败==> ',err)
         }
      })
    })
  }
})

    }else{
      // 显示消息提示框
      wx.showToast({
        title: '请输入收货地址',
        icon:'none',
        duration:3000,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
// 定义初始化支付页面数据
    var payList = []
    var totalPrice = 0
    // 判断支付的页面0代表购物车 1代表详情页 下单
    if(options.id == '0'){
      payList = wx.getStorageSync('cartData')
      payList.forEach(item => {
        totalPrice +=item.num * parseFloat(item.goodsPrice)
      })
    }else{
      var good =wx.getStorageSync('detailsData')
good.num = 1
payList = [good]
totalPrice = good.goodsPrice
    }
    // 修改data数据
    this.setData({
      payList,
      id:options.id,
      totalPrice
      
    })

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