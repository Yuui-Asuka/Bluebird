// pages/charge/charge.js
// const GLOBAL_URL = "https://www.maowin.top"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rest: 0
  },

  chargeNow: function(e) {
    var chargeNum = e.currentTarget.id * 100
    var that = this
    wx.getStorage({
      key: 'jwtData',
      success (res) {
        var openId = res.data.open_id;
        console.log(openId)
        let body = "猫印-储值卡"
        let total_fee = chargeNum
        wx.request({
        url: `${app.globalData.GLOBAL_URL}/onPay/pay_url?body=${body}&total_fee=${total_fee}&openid=${openId}`,
        success: (res) =>{
          wx.requestPayment({
            'timeStamp': res.data.timeStamp,
            'nonceStr': res.data.nonceStr,
            'package': res.data.package,
            'signType': 'MD5',
            'paySign': res.data.paySign,
            'success': function (res){
              console.log(res)
              wx.request({
                url: `${app.globalData.GLOBAL_URL}/gift_card/recharge?open_id=${openId}&money=${total_fee}`,
                method: "PUT",
                success: (res)=>{
                  wx.request({
                    url: `${app.globalData.GLOBAL_URL}/gift_card/get_money?open_id=${openId}`,
                    method: "GET",
                    success: (res) =>{
                      var restMoney = (res.data / 100).toFixed(2)
                      var pages = getCurrentPages()
                      that.setData({rest: restMoney})
                      if(pages.length > 1){
                        var prePage = pages[pages.length - 2]
                        prePage.setData({money: restMoney})
                      }
                      wx.setStorage({
                        data: restMoney,
                        key: 'restMoney',
                      })
                    }
                  })
                }
              })
            }
          })
      }
    })
      }
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

    var that = this
    wx.request({
      url: `${app.globalData.GLOBAL_URL}/charge/charge_set`,
      success: (res)=>{
        that.setData({chargeList: res.data})
      }
    })

    wx.getStorage({
      key: 'restMoney',
      success: (res)=>{
        that.setData({rest: res.data})
      }
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