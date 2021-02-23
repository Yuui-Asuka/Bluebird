// pages/add_guest/add_guest.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chosenArea: "中国大陆"
  },

  saveInfo: function (e) {
    if (isNaN(this.data.name) == false || isNaN(this.data.id) == true || isNaN(this.data.phone) == true || this.data.id.length != 18){
      wx.showModal({
        content: "身份证号或者姓名或者电话号码的格式不正确，请重新输入。",
        confirmText: "确定",
        showCancel: false
      })
    }
    else{
    var guestInfo = {
      guestName: this.data.name,
      identification: this.data.id,
      phone: this.data.phone
    }
    var pages = getCurrentPages()
    if(pages.length > 1){
    var prePage = pages[pages.length - 2]
    prePage.data.guestList.push(guestInfo)
    prePage.setData({guestList: prePage.data.guestList})
    }
    wx.navigateBack({delta: 1})
  }},

  getId: function(e) {
    this.setData({id: e.detail.value})
  },

  getName: function (e){
    this.setData({name: e.detail.value})
  },

  getPhone: function (e) {
    this.setData({phone: e.detail.value})
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