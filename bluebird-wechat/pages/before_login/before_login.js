// pages/before_login/before_login.js
// const GLOBAL_URL = "https://www.maowin.top"
//const GLOBAL_URL = "http://localhost:8080"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindGetUserInfo (e) {
    if (e.detail.userInfo){
      wx.setStorage({
        data: e.detail.userInfo,
        key: 'userInfo',
      })
      wx.reLaunch({
        url: '../../pages/mine/mine',
      })
    }
    else if (e.detail.userInfo == undefined){
      wx.reLaunch({
        url: '../../pages/search/search',
      })
    }
  },

  bindLogin: function (e){
  wx.login({
    success (res) {
      if (res.code) {
        //发起网络请求
        wx.request({
          url: `${app.globalData.GLOBAL_URL}/onLogin/login_url`,
          data: {
            code: res.code
          },
          success: (res)=> {console.log(res.data)
          wx.setStorage({
            data: res.data,
            key: 'jwtData',
          })
          var openId = res.data.open_id
          //创建新的储值卡
          wx.request({
            url: `${app.globalData.GLOBAL_URL}/gift_card/add_card?open_id=${openId}`,
            method: "POST"
          })
        },
          fail: res=> {console.log("失败了")},
          
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    },
    })
      // wx.getSetting({
      //   success (res){
      //     if (res.authSetting['scope.userInfo']) {
      //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
      //       wx.getUserInfo({
      //         success: function(res) {
      //           wx.setStorage({
      //             data: res.userInfo,
      //             key: 'userInfo',
      //           })
      //           console.log(res.userInfo)
      //         },
      //         complete: ()=>{
      //           wx.reLaunch({
      //             url: '../../pages/mine/mine',
      //           })
      //         }
      //       })
      //     }
      //   }
      // })
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
    // 查看是否授权
    // wx.getSetting({
    //   success (res){
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.getUserInfo({
    //         success: function(res) {
    //           wx.setStorage({
    //             data: res.userInfo,
    //             key: 'userInfo',
    //           })
    //           console.log(res.userInfo)
    //         }
    //       })
    //     }
    //   }
    // })
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