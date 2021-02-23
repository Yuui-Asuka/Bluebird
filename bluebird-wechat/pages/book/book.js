// pages/book/book.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemNum: 1,
    city: '杭州市',
    houseName: '栖息地民宿',
    roomUrl: "../../images/004.jpg",
    remind: "提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒提醒",
    stayMonth: 12,
    stayDay: 6,
    leaveMonth: 12,
    leaveDay: 17,
    night: 11,
    peopleNum: 2,
    typeList: [{typeButton: "双人房", 
                details: {typeBed: "双床", typeAreaLow: "15", typeAreaHigh: "25", typeNum: 2},
                typePrice: 292},
                {typeButton: "单人房", 
                details: {typeBed: "单床", typeAreaLow: "10", typeAreaHigh: "20", typeNum: 1},
                typePrice: 199},
                {typeButton: "双人房", 
                details: {typeBed: "特大床", typeAreaLow: "30", typeAreaHigh: "50", typeNum: 3},
                typePrice: 599}],
    discountName: "夏季特惠",
    discountPercent: 7,
        
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
    let night = 11
    let singlePrice = 355
    let totalFee
    let actualFee
    let discountNum = 15
    totalFee = singlePrice * night
    actualFee = totalFee - discountNum
    
    this.setData({totalFee: totalFee, singlePrice: singlePrice, discountNum: discountNum, actualFee: actualFee})
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