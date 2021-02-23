// pages/wait_pay/wait_pay.js
const app = getApp()
const FOOD_URL = "../../images/icons/activities/food_purple.png"
const ACTIVITY_URL = "../../images/icons/activities/activity_purple.png"
const LODGING_URL = "../../images/icons/activities/lodging_purple.png"
const TRIP_URL = "../../images/icons/activities/trip_purple.png"
const pathMap = {"F": FOOD_URL, "A": ACTIVITY_URL, "L": LODGING_URL, "T": TRIP_URL}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: "杭州",
    houseName: "栖息地民宿",
    failTime: "14:02",
    navbar: ["进行中","已完成"],
    currentTab: 0,
    // orderList: [
    //   {img: pathMap.L, name: "民宿住宿 · 双人房", time: "5月24日 · 周四 - 6月2日 · 周日", price: 3558, num: 5},
    //   {img: pathMap.F, name: "餐饮美食 · 早餐", time: "5月24日 · 周四 - 6月2日 · 周日", price: 198, num: 5},
    //   {img: pathMap.F, name: "餐饮美食 · 午餐", time: "5月24日 · 周四 - 6月2日 · 周日", price: 198, num: 5},
    //   {img: pathMap.A, name: "民宿活动 · 烧烤", time: "5月24日 · 周四 - 6月2日 · 周日", price: 198, num: 5}
    // ],
    totalPrice: 2564,
    peopleNum: 3,
    peopleList: [{name: "某某某",phone: "123456", ident: "123456"}, {name: "某某某",phone: "123456", ident: "123456"}, {name: "某某某",phone: "123456", ident: "123456"}],
    //orderCode: "DDEFEFFFFGRGEFGEWGWREGEGRGRGREWGRDEFGREG"
  },

  cancelOrder: function (e) {
    var pages = getCurrentPages()
    if(pages.length > 1){
    var prePage = pages[pages.length - 2]
    this.data.orderList.splice(e.currentTarget.id, 1)
    this.setData({orderList: this.data.orderList})
    prePage.setData({waitPay: this.data.orderList})
    }
    this._priceCacu()
  },

  payNow: function (){
    // var orderUrl = encodeURI(`${app.globalData.GLOBAL_URL}/order/post_order?openid=${this.data.openId}&state=0&submit_time=${timeStamp}&total_fee=${parseFloat(this.data.price)}&nick_name=${nickName}&business_code=${this.data.businessCode}&order_content=${orderContent}&guest_info=${guestInfo}&start_date=${start}&end_date=${end}&message=${this.data.message}`)
  },

  _priceCacu: function (){
    var totalPrice = 0
    for (var i = 0; i < this.data.orderList.length; i++){
      totalPrice += this.data.orderList[i].price
    }
    this.setData({totalPrice: totalPrice})
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
    if (options.orderState == 0){
    var orderList = JSON.parse(options.orderList)
    var orderCode = options.orderCode
    if (options.guestInfo != "undefined"){
    var guestInfo = JSON.parse(options.guestInfo)
    }
    else{
      var guestInfo = null
    }
    this.setData({orderState: options.orderState, orderList: orderList, peopleList: guestInfo, orderCode: options.orderCode})
    wx.getStorage({
      key: 'bookInfo',
      success: (res) => {
        that.setData({startDate: res.data.startDate, endDate: res.data.endDate, night: res.data.night, peopleNum: res.data.peopleNum, trolley: res.data.trolley, price: res.data.price, city: res.data.city, houseName: res.data.houseName, businessCode: res.data.businessCode, openId: res.data.openId})
      }
    })
    this._priceCacu()
  }
  else{

    // orderList: [
    //   {img: pathMap.L, name: "民宿住宿 · 双人房", time: "5月24日 · 周四 - 6月2日 · 周日", price: 3558, num: 5},
    //   {img: pathMap.F, name: "餐饮美食 · 早餐", time: "5月24日 · 周四 - 6月2日 · 周日", price: 198, num: 5},
    //   {img: pathMap.F, name: "餐饮美食 · 午餐", time: "5月24日 · 周四 - 6月2日 · 周日", price: 198, num: 5},
    //   {img: pathMap.A, name: "民宿活动 · 烧烤", time: "5月24日 · 周四 - 6月2日 · 周日", price: 198, num: 5}
    // ],

    // peopleList: [{name: "某某某",phone: "123456", ident: "123456"}, {name: "某某某",phone: "123456", ident: "123456"}, {name: "某某某",phone: "123456", ident: "123456"}],

    var orderCode = options.orderCode
    var url = `${app.globalData.GLOBAL_URL}/order/get_order_by_code?order_code=${orderCode}`
    wx.request({
      url: url,
      success: (res)=>{
        console.log(res.data)
        var businessCode = res.data[0].businessCode
        var totalPrice = res.data[0].totalFee
        var orderContent = JSON.parse(res.data[0].orderContent)
        var peopleList = JSON.parse(res.data[0].guestInfo)
        var orderList = orderContent.trolley.activityList
        var house = {picture: pathMap.L, name: orderContent.trolley.houseSelect.houseType, time: orderContent.trolley.houseSelect.houseTime, singlePrice: orderContent.trolley.houseSelect.actualFee, 
        num: orderContent.night}
        orderList.unshift(house)
        that.setData({orderList: orderList, peopleList: peopleList, totalPrice: totalPrice, orderCode: orderCode})
        wx.request({
          url: `${app.globalData.GLOBAL_URL}/house/details?business_code=${businessCode}`,
          success: (res)=>{
            var city = res.data.city
            var houseName = res.data.houseName
            that.setData({city: city, houseName: houseName})
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