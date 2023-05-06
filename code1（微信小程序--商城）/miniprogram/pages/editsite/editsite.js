import address from '../../utils/city.js'

// pages/editsite/editsite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
// 获取城市信息
provinces:"",
citys:"",
areas:"",
// 显示隐藏地址联动
showAddress:false,
  },

  // 地区信息输入框聚焦式触发，显示地址联动
  showSite(){
    this.setData({
      showAddress:true
    })
  },
  // 隐藏地址联动
  hideSite(){
    this.setData({
      showAddress:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
// 获取默认地址信息
    this.setData({
provinces:address.provinces,
citys:address.citys[address.provinces[0].id],
areas:address.areas[address.citys[address.provinces[0].id][0].id]
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