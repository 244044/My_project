// pages/category/category.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
        scrollHeight:400,
        index:2,
        categoryItem:[
            'T恤',
            '毛衣',
            '卫衣',
            '裙子',
            '休闲裤',
            '牛仔裤',
            '短裤',
            '棉裤',
        ]
        // cateItems:[
        //     {
        //         cate_id:1,
        //         cate_name:"签到",
        //         ishaveChild:true,
        //         children:
        //         [
        //             {
        //                 child_id: 1,
        //             name:'不完整老鹰提花高领女款毛衣',
        //             image:"maoyi03.jpg"
        //             }
        //         ]
            
        //     },
        //     {
        //         cate_id:2,
        //         cate_name:"附近",
        //         ishaveChild:true,
        //         children:
        //         [
        //             {
        //                 child_id: 1,
        //             name:'新款潮牌原创设计感小众字母宽松半袖上衣服',
        //             image:"goods-txue03.jpg"
        //             }
        //         ]
            
        //     },
        //     {
        //         cate_id:3,
        //         cate_name:"展会",
        //         ishaveChild:true,
        //         children:
        //         [
        //             {
        //                 child_id: 1,
        //             name:'毛衣爱心针织肖战宋威龙男女同款',
        //             image:"maoyi04.jpg"
        //             }
        //         ]
            
        //     },
        //     {
        //         cate_id:4,
        //         cate_name:"福利",
        //         ishaveChild:true,
        //         children:
        //         [
        //             {
        //                 child_id: 1,
        //             name:'长袖工装上衣女拼色抽绳套头卫衣休闲外套',
        //             image:"weiyi01.jpg"
        //             }
        //         ]
            
        //     },
        //     {
        //         cate_id:5,
        //         cate_name:"玩乐",
        //         ishaveChild:true,
        //         children:
        //         [
        //             {
        //                 child_id: 1,
        //             name:'长袖工装上衣女拼色抽绳套头卫衣休闲外套',
        //             image:"maoyi01.jpg"
        //             }
        //         ]
            
        //     },
        //     {
        //         cate_id:6,
        //         cate_name:"体育",
        //         ishaveChild:true,
        //         children:
        //         [
        //             {
        //                 child_id: 1,
        //             name:'长袖工装上衣女拼色抽绳套头卫衣休闲外套',
        //             image:"goods-txue01.jpg"
        //             }
        //         ]
            
        //     },
        //     {
        //         cate_id:7,
        //         cate_name:"周边",
        //         ishaveChild:true,
        //         children:
        //         [
        //             {
        //                 child_id: 1,
        //             name:'长袖工装上衣女拼色抽绳套头卫衣休闲外套',
        //             image:"niuzk01.jpg"
        //             }
        //         ]
            
        //     },
        //     {
        //         cate_id:8,
        //         cate_name:"亲子",
        //         ishaveChild:true,
        //         children:
        //         [
        //             {
        //                 child_id: 1,
        //             name:'长袖工装上衣女拼色抽绳套头卫衣休闲外套',
        //             image:"maoyi02.jpg"
        //             }
        //         ]
            
        //     },
        // ],
        
    },
    setIndex:function(options){
        console.log(options.target.dataset.id);
        console.log("点击事件触发")
        this.setData({
            index:options.target.dataset.id,
          
        })
    },
   
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.getSystemInfo({
          success: (result) => {console.log(result.windowHeight);
        this.setData({
            scrollHeight:result.windowHeight
        })
        },
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