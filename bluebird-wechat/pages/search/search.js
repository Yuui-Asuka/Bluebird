// pages/search/search.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateText: "任何时间",
    city: "我所在的城市",
    style: "任何风格",
    something: "任何事情",
    proList: ["../../images/icons/cover1.jpg"]
    // startMonth: 1,
    // startDate: 1,
    // endMonth: 1,
    // endDate: 1
  },

  search: function(e) {

    if ( wx.getStorageSync('jwtData') == null){
      wx.reLaunch({
        url: "../../pages/before_login/before_login",
      })
    }
    var now = new Date()
    var tomorrow = new Date()
    tomorrow.setTime(tomorrow.getTime()+24*60*60*1000);
    if (this.data.startMonth || this.data.startDate || this.data.endMonth || this.data.endDate){
      var startMonth = this.data.startMonth
      var endMonth = this.data.endMonth
      var startDate = this.data.startDate
      var endDate = this.data.endDate
    }else{
    var startMonth = now.getMonth() + 1
    var startDate = now.getDate()
    var endMonth = tomorrow.getMonth() + 1
    var endDate = tomorrow.getDate()
    }
    wx.navigateTo({
      url: `../../pages/house_set/house_set?startMonth=${startMonth}&startDate=${startDate}&endMonth=${endMonth}&endDate=${endDate}`
    })
  },

  timeSelect: function (e) {
    wx.navigateTo({
      url: '../../pages/calendar/calendar',
    })

  },

  locationSelect: function (e) {
    wx.navigateTo({
      url: '../../pages/where/where',
    })
  },

  styleSelect: function (e) {
    wx.navigateTo({
      url: '../../pages/which_style/which_style',
    })
  },

  thingsSelect: function (e){
    wx.navigateTo({
      url: '../../pages/do_what/do_what',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var height = wx.getSystemInfoSync().screenHeight * 1.65
    var width = wx.getSystemInfoSync().screenWidth * 1.2
    this.setData({height: height, width: width})
    wx.setNavigationBarTitle({
      title: '猫印民宿酷',
    })
    wx.setNavigationBarColor({
      backgroundColor: '#000000',
      frontColor: '#ffffff',
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