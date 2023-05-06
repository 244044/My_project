// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    //    msg:"你好世界",
       imgs:[
           "/images/goods-txue05.jpg",
           "/images/goods-txue02.jpg",
           "/images/goods-txue03.jpg",
           "/images/goods-txue01.jpg",
       ],
    //    goodsList:[
    //     {
    //         id:1,
    // goodsImage:"/images/lists02.webp",
    // goodsName:"1 商品名称",
    // goodsAddress:"广州",
    // goodsPrice:"200",
    // num:1
    //     },
    //     {
    //         id:2,
    // goodsImage:"/images/lists02.webp",
    // goodsName:"2 商品名称",
    // goodsAddress:"广州",
    // goodsPrice:"200",
    // num:1
    //     },  
    // ]

      iconArray:[
          {
                 url:"/images/icon-qiandao.png",
                text:"T恤",
            },
            {
             url:"/images/icon-fujin.png",
             text:"毛衣",
         },
        {
              url:"/images/icon-fuli.png",
        text:"卫衣",
         },
      {
              url:"/images/icon-muma.png",
            text:"裙子",
     },
        {
            url:"/images/icon-qinzi.png",
            text:"休闲裤",
         },
         {
            url:"/images/icon-tiyu.png",
            text:"牛仔裤",
         },
         {
            url:"/images/icon-zhanhui.png",
            text:"短裤",
         },
         {
            url:"/images/icon-xingxing.png",
            text:"棉裤",
         },
      ],
     
      goodsList:[
        {
            id:1,
    goodsImage:"/images/goods-txue03.jpg",
    goodsName:"绿光短袖t恤女夏季新款潮牌原创设计感小众字母宽松半袖上衣服女",
    goodsAddress:"广州",
    goodsPrice:"57.00",
    
        },
        {
            id:2,
    goodsImage:"/images/lianyiqun01.jpg",
    goodsName:" 牛仔连衣裙女夏法式小众气质收腰小个子泡泡袖长短款裙子大码短袖",
    goodsAddress:"江苏",
    goodsPrice:"79.90",
   
        },  
        {
            id:3,
    goodsImage:"/images/maoyi01.jpg",
    goodsName:" 帛卡琪2020秋冬新款宽松拼色碎花针织衫少女长袖内搭小雏菊毛衣潮",
    goodsAddress:"浙江",
    goodsPrice:"109.00",
   
        },  
        {
            id:4,
    goodsImage:"/images/maoyi03.jpg",
    goodsName:" Boylondon旗舰官网2020冬季不完整老鹰提花高领女款毛衣",
    goodsAddress:"上海",
    goodsPrice:"1599.99",
   
        },  
        {
            id:5,
    goodsImage:"/images/xiuxianku01.jpg",
    goodsName:"  阔腿裤女夏季薄款高腰垂感直筒休闲裤子宽松显瘦长裤春拖地西装裤袖",
    goodsAddress:"云南",
    goodsPrice:"249.50",

   
        },  
    //     {
    //         id:6,
    // goodsImage:"/images/goods-txue05.jpg",
    // goodsName:"   韩索依 复古文艺夏季新款贴布绣花五分袖宽松上衣ins潮短袖t恤女",
    // goodsAddress:"苏州",
    // goodsPrice:"79.00",//原价为179.00
    
   
    //     },  
    ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    //获取数据
    toDetails(event){
        var index = event.currentTarget.dataset.index
        var data = this.data.goodsList[index]
        wx.setStorageSync('detailsData', data)
        wx.navigateTo({
          url: '/pages/details/details',
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