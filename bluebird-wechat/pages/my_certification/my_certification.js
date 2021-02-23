// pages/my_certification/my_certification.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navbar: ["民宿活动","餐饮美食"],
    houseList: [{city: "杭州", houseName: "栖息地", activityList: [{activityName: "民宿活动 · 烧烤",activityTime: "5月27日 · 周五 15 : 30 - 18 : 30"}, {activityName: "民宿活动 · 采茶",activityTime: "5月28日 · 周五 15 : 30 - 18 : 30"}], foodList: [{foodName: "餐饮美食 · 早餐",foodTime: "5月27日 · 周五 15 : 30 - 18 : 30"}, {foodName: "餐饮美食 · 午餐",foodTime: "5月28日 · 周五 15 : 30 - 18 : 30"}, {foodName: "餐饮美食 · 晚餐",foodTime: "5月28日 · 周五 15 : 30 - 18 : 30"}]},
    {city: "北京", houseName: "XX民宿", activityList: [{activityName: "民宿活动 · 烧烤",activityTime: "5月27日 · 周五 15 : 30 - 18 : 30"}, {activityName: "民宿活动 · 采茶",activityTime: "5月28日 · 周五 15 : 30 - 18 : 30"}, {activityName: "民宿活动 · 采茶",activityTime: "5月28日 · 周五 15 : 30 - 18 : 30"}]}],

  },

  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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