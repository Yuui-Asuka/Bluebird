// pages/do_what.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityList: [
      {name: "住宿", flag: false},
      {name: "采茶", flag: false},
      {name: "烧烤", flag: false},
      {name: "婚纱照", flag: false},
      {name: "homeparty", flag: false},
      {name: "爬山", flag: false},
      {name: "组团旅游", flag: false}
    ],
  },

  touchItem: function (e) {
    if(this.data.activityList[e.currentTarget.id].flag == false){
    this.data.activityList[e.currentTarget.id].flag = true
    var activity= this.data.activityList
    this.setData({activityList: activity})
  }
    else{
      this.data.activityList[e.currentTarget.id].flag = false
    var activity = this.data.activityList
    this.setData({activityList: activity})
    }

  },

  sure: function (e) {
    let activity = this.data.activityList
    var string = ""
    for (var i = 0; i < activity.length; i++){
      if (activity[i].flag == true){
        string += activity[i].name
        string += " "
      }
    }
    if (string == ""){
      string = "任何事情"
    }

    var pages = getCurrentPages()
    if(pages.length > 1){
    var prePage = pages[pages.length - 2]
    prePage.setData({something: string})
    }

    wx.navigateBack({
      delta: 1,
    }
    )
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