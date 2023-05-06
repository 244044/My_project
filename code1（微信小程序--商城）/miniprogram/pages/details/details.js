// pages/details/details.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgs:[
          "/images/goods-txue05.jpg",
          "/images/goods-txue02.jpg",
          "/images/goods-txue03.jpg",
          "/images/goods-txue01.jpg",
        ],
        goods:[],
        num:0
    },
// 跳转首页
goHome:function(){
    wx.switchTab({
      url: '/pages/home/home',
    })
},
// 跳转购物车
goCart:function(){
    wx.switchTab({
        url: '/pages/cart/cart',
      })
},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
      // 获取购物车的缓冲数据
       var cartData = wx.getStorageSync('cartData')
      //  定义初始化购物车商品数量
       var num = 0
      //  判断购物车中是否有商品
       if (cartData.length){
        //  循环遍历商品
         for (var j = 0; j <cartData.length; j++) {
            // 所有商品数量相加
           num += cartData[j].num
        
         }
       }
      //  获取详情页缓存数据
this.setData({
    goods:[wx.getStorageSync('detailsData')]
})
    },
    // 加入购物车
setCart: function(){
  
  
  
    var cartData = wx.getStorageSync('cartData')
    
    var num = 0
    
        
        
    if (cartData.length) {
        
      var isTrue = true 
          
        for (var i = 0; i < cartData.length; i++) {
            
            if (cartData[i].id == this.data.goods[0].id) {
               
              cartData[i].num++
                
                isTrue = false
            
            }
        
        }
        
        if (isTrue) {
            
          var goods = this.data.goods
            
              goods[0].num = 1
            
            cartData.unshift(goods[0])
       
        }
       
      wx.setStorageSync('cartData', cartData)
        
        for (var j = 0; j <cartData.length; j++) {
            
          num += cartData[j].num
        
        }
        
    } else {
        
      var goods = this.data.goods
        
          goods[0].num = 1
        
            wx.setStorageSync('cartData', goods)
       
              num = 1
    
    }
    console.log('num==>', num)
    
      
      this.setData({
        
        num:num
    })
    },
//请求数据详情页

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