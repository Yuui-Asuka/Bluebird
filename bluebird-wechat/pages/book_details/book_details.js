// pages/book_details/book_details.js
const watch = require("../../utils/watch.js");
const SCROLL_LEFT = wx.getSystemInfoSync().windowWidth
const WINDOW_HEIGHT = wx.getStorageInfoSync().windowHeight
const FOOD_URL = "../../images/icons/activities/food_purple.png"
const ACTIVITY_URL = "../../images/icons/activities/activity_purple.png"
const LODGING_URL = "../../images/icons/activities/lodging_purple.png"
const TRIP_URL = "../../images/icons/activities/trip_purple.png"
const pathMap = {"F": FOOD_URL, "A": ACTIVITY_URL, "L": LODGING_URL, "T": TRIP_URL}
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // city: "杭州市",
    // houseName: "栖息地民宿",
    // bossName: "某某某",
    // houseUrl: "../../images/004.jpg",
    // peopleNum: 3,
    // guestName: "某某某",
    identification: 12231456465,
    discountNum: 17,
    actualFee: 255,
    discount: false,
    // guestList:[{guestName: "李某某", identification: 56352656566341, phone: 15015603489},
    //            {guestName: "张某某", identification: 56345646663412, phone: 15215893257},
    //            {guestName: "赵某某", identification: 45645645645534, phone: 14465823589}],
    guestList: [{guestName: "", identification: "", phone: ""}],
    currentStatu: "close",
    showModalStatus: false,
  },


  util: function(currentStatu){
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200,  //动画时长
      timingFunction: "linear", //线性
      delay: 0  //0则不延迟
    });
    
    // 第2步：这个动画实例赋给当前的动画实例
    this.animation = animation;
 
    // 第3步：执行第一组动画
    animation.opacity(0).rotateX(-100).step();
 
    // 第4步：导出动画对象赋给数据对象储存
    this.setData({
      animationData: animation.export()
    })
    
    // 第5步：设置定时器到指定时候后，执行第二组动画
    setTimeout(function () {
      // 执行第二组动画
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
      this.setData({
        animationData: animation
      })
      
      //关闭
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)
  
    // 显示
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
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
    // wx.getStorage({
    //   key: "stayData",
    //   success: res => this.setData(res.data)
    // })
    wx.getStorage({
      key: 'bookInfo',
      success: (res) => {
        that.setData({startDate: res.data.startDate, endDate: res.data.endDate, night: res.data.night, peopleNum: res.data.peopleNum, trolley: res.data.trolley, price: res.data.price, city: res.data.city, houseName: res.data.houseName, businessCode: res.data.businessCode, openId: res.data.openId})
        wx.request({
          url: `${app.globalData.GLOBAL_URL}/house/details?business_code=${that.data.businessCode}`,
          success: (res)=>{
            var houseImg = app.globalData.GLOBAL_URL + res.data.mainPath
            var businessName = res.data.businessName
            that.setData({houseUrl: houseImg, bossName: businessName})
          }
        })
      }
    })
  },

  // 确认支付
  closeModal: function (e){
    var currentStatu = e.currentTarget.dataset.statu;
    var orderContent = JSON.stringify({
      night: this.data.night,
      peopleNum: this.data.peopleNum,
      trolley: this.data.trolley,
      message: this.data.message,
      businessCode: this.data.businessCode,
      openId: this.data.openId,
      city: this.data.city,
      houseName: this.data.houseName
    })
    var stayData = wx.getStorageSync('stayData')
    var start = `${stayData.startYear}-${stayData.startMonth}-${stayData.startDate}`
    var end = `${stayData.endYear}-${stayData.endMonth}-${stayData.endDate}`
    var timeStamp = new Date().getTime()
    var nickName = wx.getStorageSync('userInfo').nickName
    var guestInfo = JSON.stringify(this.data.guestList)
    
    var orderUrl1 = encodeURI(`${app.globalData.GLOBAL_URL}/order/post_order?openid=${this.data.openId}&state=0&submit_time=${timeStamp}&total_fee=${parseFloat(this.data.price)}&nick_name=${nickName}&business_code=${this.data.businessCode}&order_content=${orderContent}&guest_info=${guestInfo}&start_date=${start}&end_date=${end}&message=${this.data.message}`)

    var orderUrl2 = encodeURI(`${app.globalData.GLOBAL_URL}/order/post_order?openid=${this.data.openId}&state=1&submit_time=${timeStamp}&total_fee=${parseFloat(this.data.price)}&nick_name=${nickName}&business_code=${this.data.businessCode}&order_content=${orderContent}&guest_info=${guestInfo}&start_date=${start}&end_date=${end}&message=${this.data.message}`)
    // 确认支付
    if (e.currentTarget.id == 1){
      wx.request({
        url: orderUrl2,
        method: "POST",
        success: (res)=>{
          var orderCode = res.data
          var guestInfo = JSON.stringify(this.data.guestList)
          wx.reLaunch({
            url: '../../pages/mine/mine',
            success: (res)=>{
              wx.showToast({
                title: '订单支付成功！',
              })
            }
          })
          // wx.reLaunch({
          // url: `../../pages/my_order/my_order?orderState=1&currentTab=1&orderCode=${orderCode}&guestInfo=${guestInfo}`})
          if (res.data == -1){
            wx.showModal({
              content: '余额不足，请充值！',
              success: (res)=>{
                if (res.confirm){
                  wx.navigateTo({
                    url: '../../pages/charge/charge',
                  })
                }
              }
            })
          }
        }
      })
    }
    else if (e.currentTarget.id == 0){
      wx.request({
        url: orderUrl1,
        method: "POST",
        success: (res)=>{
          var orderCode = res.data
          var guestInfo = JSON.stringify(this.data.guestList)
          wx.reLaunch({
          url: `../../pages/my_order/my_order?orderState=0&currentTab=0&orderCode=${orderCode}&guestInfo=${guestInfo}`
      })
    }
  })}
    this.util(currentStatu)
  },

  submitOrder: function (e){
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },

  guest: function (e){
    wx.navigateTo({
      url: '../../pages/add_guest/add_guest',
    })
  },

  subGuest: function (e){
    this.data.guestList.splice(e.currentTarget.id, 1)
    this.setData({guestList: this.data.guestList})
  },

  messageInput: function (e) {
    this.setData({message: e.detail.value})
  },

  cancelBook: function (e) {

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