// pages/which_style/which_style.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    styleList: [
      {name: "时尚", flag: false},
      {name: "田园", flag: false},
      {name: "欧美", flag: false},
      {name: "古镇", flag: false},
      {name: "日式", flag: false},
      {name: "海边", flag: false},
      {name: "日出", flag: false}
    ],
  },

  touchItem: function (e) {
    if(this.data.styleList[e.currentTarget.id].flag == false){
    this.data.styleList[e.currentTarget.id].flag = true
    var style = this.data.styleList
    this.setData({styleList: style})
  }
    else{
      this.data.styleList[e.currentTarget.id].flag = false
    var style = this.data.styleList
    this.setData({styleList: style})
    }

  },

  sure: function (e) {
    let style = this.data.styleList
    var string = ""
    for (var i = 0; i < style.length; i++){
      if (style[i].flag == true){
        string += style[i].name
        string += " "
      }
    }
    if (string == ""){
      string = "任何风格"
    }

    var pages = getCurrentPages()
    if(pages.length > 1){
    var prePage = pages[pages.length - 2]
    prePage.setData({style: string})
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