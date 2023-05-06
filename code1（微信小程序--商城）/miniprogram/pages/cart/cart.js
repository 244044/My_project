// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsList:[
            {
              id:1,
              goodsImage:"/images/goods-txue03.jpg",
              goodsName:"绿光短袖t恤女夏季新款潮牌原创设计感小众字母宽松半袖上衣服女",
              goodsAddress:"广州",
              goodsPrice:"57.00",
        num:1
            },
            {
              id:2,
              goodsImage:"/images/lianyiqun01.jpg",
              goodsName:" 牛仔连衣裙女夏法式小众气质收腰小个子泡泡袖长短款裙子大码短袖",
              goodsAddress:"江苏",
              goodsPrice:"79.90",
        num:1
            },
            {
              id:3,
              goodsImage:"/images/maoyi01.jpg",
              goodsName:" 帛卡琪2020秋冬新款宽松拼色碎花针织衫少女长袖内搭小雏菊毛衣潮",
              goodsAddress:"浙江",
              goodsPrice:"109.00",
      num:1
          },
          {
            id:4,
            goodsImage:"/images/maoyi03.jpg",
            goodsName:" Boylondon旗舰官网2020冬季不完整老鹰提花高领女款毛衣",
            goodsAddress:"上海",
            goodsPrice:"1599.99",
    num:1
        },
        {
          id:5,
          goodsImage:"/images/xiuxianku01.jpg",
          goodsName:"  阔腿裤女夏季薄款高腰垂感直筒休闲裤子宽松显瘦长裤春拖地西装裤袖",
          goodsAddress:"云南",
          goodsPrice:"249.50",
  num:1
      },
        ]

    },
// 加法计算
add:function(options){
  
    let index = options.target.dataset.id;
   
  let num = this.data.goodsList[index].num;
    
  let key = "goodsList["+index+"].num";
   
  let obj = {};
    
  obj[key] = num + 1;
    
  this.setData(obj);
  this.getTotal();
  wx.setStorageSync('cartData', this.data.goodsList)

},

// 减法计算

  reduce:function(options){
    
    let index = options.target.dataset.id;
    
    let num = this.data.goodsList[index].num;
    
    let key ="goodsList["+index+"].num";
    
    let obj = {};
   
    if(num <= 1){
        
      obj[key] = 1;

    }else{
        
      obj[key] = num - 1;
    
    }
    // obj[key]=num+1;
    this.setData(obj);
    this.getTotal();
    wx.setStorageSync('cartData', this.data.goodsList)
  },
//   删除功能
del:function(options){
  console.log(options.currentTarget.dataset.id);
    let index = options.currentTarget.dataset.id;
      this.data.goodsList.splice(index,1);
  this.setData({
      goodsList:this.data.goodsList
  })
  this.getTotal();
  wx.setStorageSync('cartData', this.data.goodsList)
},
// 计算总价格
getTotal:function(){
    let goodsList = this.data.goodsList;
    let data =goodsList.reduce(function(total,item){
        total=total + item.num * parseFloat(item.goodsPrice);
        return total;
    },0)
    this.setData({
        totalData:data
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
     this.setData({
       goodsList:wx.getStorageSync('cartData')
     })
      this.getTotal();
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