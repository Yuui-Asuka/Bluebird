// pages/mine/mine.js
// const GLOBAL_URL = "https://www.maowin.top"
// const GLOBAL_URL = "http://localhost/8080"
const app = getApp()
Page({
  onTabItemTap(item) {
    // 可以在此做自己需求的逻辑操作，如点击出现弹窗等
    
  },


  /**
   * 页面的初始数据
   */
  data: {
    points: 0,
    certificate: 0,
    hide: false,
    eyeUrl : "../../images/icons/eyeable.png",
    memberType: "大会员"
  },

  myOrder: function (e) {
    wx.navigateTo({
      url: '../../pages/my_order/my_order',
    })
  },

  charge: function (e) {
    wx.navigateTo({
      url: "../../pages/charge/charge",
    })
  },

  myLove: function (e) {
    wx.navigateTo({
      url: '../../pages/my_love/my_love',
    })
  },

  myCertification: function (e) {
    wx.navigateTo({
      url: '../../pages/my_certification/my_certification',
    })
  },

  hideInfo: function (e) {
    if (this.data.hide == false){
    this.setData({hide: true, eyeUrl: "../../images/icons/hide.png"})
    }
    else{
      this.setData({hide: false, eyeUrl: "../../images/icons/eyeable.png"})
    }
  },

  help: function (e) {
    wx.navigateTo({
      url: '../../pages/help/help',
    })
  },

  loginWx: function (e) {
    
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

    var jwtData = wx.getStorageSync('jwtData')
    var userInfo = wx.getStorageSync('userInfo')
    if (jwtData == "" || userInfo == ""){
    wx.reLaunch({
      url: "../../pages/before_login/before_login",
    })
  }
  else{
  var that = this
    wx.getStorage({
      key: 'userInfo',
      success (res) {
        console.log(res.data)
        const nickName = res.data.nickName
        const city = res.data.city
        const province = res.data.province
        const avatarUrl = res.data.avatarUrl
        that.setData({userName: nickName, headImg: avatarUrl})
        wx.getStorage({
          key: 'jwtData',
          success (res) {
            const openId = res.data.open_id
            const requestUrl = `${app.globalData.GLOBAL_URL}/onLogin/user_register?open_id=${openId}&city=${city}&nick_name=${nickName}&head_img=${avatarUrl}`
            wx.request({
              url: requestUrl,
              method: "POST"
            })
            //获取储值卡剩余金额
            wx.request({
              url: `${app.globalData.GLOBAL_URL}/gift_card/get_money?open_id=${openId}`,
              method: "GET",
              success: (res) =>{
                var restMoney = (res.data / 100).toFixed(2)
                that.setData({money: restMoney})
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