// pages/my_order/my_order.js
const FOOD_URL = "../../images/icons/activities/food_purple.png"
const ACTIVITY_URL = "../../images/icons/activities/activity_purple.png"
const LODGING_URL = "../../images/icons/activities/lodging_purple.png"
const TRIP_URL = "../../images/icons/activities/trip_purple.png"
const app = getApp()
const pathMap = {"F": FOOD_URL, "A": ACTIVITY_URL, "L": LODGING_URL, "T": TRIP_URL}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // city: "杭州",
    // houseName: "栖息地民宿",
    failTime: "15:00",
    orderCode: null,
    navbar: ["待支付","进行中","已完成"],
    // this.setData({trolley: trolley, guestInfo: guestInfo, price: price, orderCode: orderCode, openId: openId, 
    //   night: night})
    orderLists: [
      {businessCode: "qixidi", orderCode: "20170725", city: "杭州市",houseName: "栖息地", orderList: [
      {img: pathMap.L, name: "民宿住宿 · 双人房", time: "5月24日 · 周四 - 6月2日 · 周日", price: 3558, num: 5},
      {img: pathMap.F, name: "餐饮美食 · 早餐", time: "5月24日 · 周四 - 6月2日 · 周日", price: 198, num: 5},
      {img: pathMap.F, name: "餐饮美食 · 午餐", time: "5月24日 · 周四 - 6月2日 · 周日", price: 198, num: 5},
      {img: pathMap.A, name: "民宿活动 · 烧烤", time: "5月24日 · 周四 - 6月2日 · 周日", price: 198, num: 5}
      ], totalFee: 2564, guestInfo: null, openId: null},
      {businessCode: "yinlu", orderCode: "20170728",city: "杭州市",houseName: "隐庐", orderList: [
      {img: pathMap.L, name: "民宿住宿 · 双人房", time: "5月24日 · 周四 - 6月2日 · 周日", price: 1458, num: 5},
      {img: pathMap.F, name: "餐饮美食 · 早餐", time: "5月24日 · 周四 - 6月2日 · 周日", price: 198, num: 5},
      {img: pathMap.F, name: "餐饮美食 · 午餐", time: "5月24日 · 周四 - 6月2日 · 周日", price: 198, num: 5},
      {img: pathMap.A, name: "民宿活动 · 烧烤", time: "5月24日 · 周四 - 6月2日 · 周日", price: 198, num: 5}
      ], totalFee: 2358}
    ]

  },
  navbarTap: function(e){
    var that = this
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    if (e.currentTarget.dataset.idx == 2){
      wx.request({
        url: `${app.globalData.GLOBAL_URL}/order/complicated/?open_id=${this.data.openId}`,
        success: (res)=>{
          var orderLists = that.getOrderList(res.data)
          that.setData({orderLists: orderLists, currentTab: 2})
        }
      })
    }
    else if (e.currentTarget.dataset.idx == 1){
      wx.request({
        url: `${app.globalData.GLOBAL_URL}/order/wait_pay_order/?open_id=${this.data.openId}`,
        success: (res)=>{
          var orderLists = that.getOrderList(res.data)
          that.setData({orderLists: orderLists, currentTab: 1})
        }
      })
    }
  },


  waitPay: function (e){
    var waitPay = this.data.waitPay
    var orderObj = JSON.stringify(waitPay)
    wx.navigateTo({
      url: `../../pages/wait_pay/wait_pay?orderState=0&orderList=${orderObj}&guestInfo=${this.data.guestInfo}&orderCode=${this.data.orderCode}`,
    })
  },

  payNow: function (e) {
    var that = this
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

    // var orderUrl = encodeURI(`${app.globalData.GLOBAL_URL}/order/post_order?openid=${this.data.openId}&state=1&submit_time=${timeStamp}&total_fee=${this.data.price}&nick_name=${nickName}&business_code=${this.data.businessCode}&order_content=${orderContent}&guest_info=${guestInfo}&start_date=${start}&end_date=${end}&message=${this.data.message}`)
    var orderUrl = encodeURI(`${app.globalData.GLOBAL_URL}/order/pay_order?open_id=${this.data.openId}&order_code=${this.data.orderCode}&total_fee=${this.data.price}&order_content=${orderContent}`)
    wx.request({
      url: orderUrl,
      method: "PUT",
      success: (res)=>{
        if (res.data == -1){
          wx.showModal({
            content: "余额不足，请充值！",
            success: (res)=>{
              if (res.confirm){
                wx.navigateTo({
                  url: '../../pages/charge/charge',
                })
              }
            }
          })
        }
        else{
          var orderCode = res.data
          wx.request({
            url: `${app.globalData.GLOBAL_URL}/order/wait_pay_order/?open_id=${this.data.openId}`,
            success: (res)=>{
              var orderLists = that.getOrderList(res.data)
              that.setData({orderLists: orderLists, currentTab: 1, orderCode: orderCode, orderState: 100})
            }
          })
        }
      }
    })
  },

  cancelOrder: function (e) {
    var that = this
    wx.request({
      url: `${app.globalData.GLOBAL_URL}/order/cancel_order?open_id=${this.data.openId}&order_code=${this.data.orderLists[e.currentTarget.id].orderCode}`,
      method:"PUT",
      success: (res)=>{
        wx.showModal({
          content: "取消操作正在后台确认中，将会在6小时之内处理完毕。",
          showCancel: false,
        })
        that.data.orderLists[e.currentTarget.id].cancelButton = "审核中"
        that.setData({orderLists: this.data.orderLists})
      }
    })
  },

  cancelOrder2: function (e) {
    var that = this
    wx.request({
      url: `${app.globalData.GLOBAL_URL}/order/cancel_order?open_id=${this.data.openId}&order_code=${this.data.orderCode}`,
      method:"PUT",
      success: (res)=>{
        wx.showToast({
          title: '订单已取消',
        })
        that.setData({orderState: 100})
      }
    })
  },

  orderDetail: function(e) {
    var orderCode = this.data.orderLists[e.currentTarget.id].orderCode
    wx.navigateTo({
      url: `../../pages/wait_pay/wait_pay?orderCode=${orderCode}&orderState=1`,
    })
  },

  orderDetail2: function(e) {
    var orderCode = this.data.orderLists[e.currentTarget.id].orderCode
    wx.navigateTo({
      url: `../../pages/wait_pay/wait_pay?orderCode=${orderCode}&orderState=2`,
    })
  },

  printf(){
  var as=[].slice.call(arguments),fmt=as.shift(),i=0;
  return fmt.replace(/%(\w)?(\d)?([dfsx])/ig,function(_,a,b,c){
       var s=b?new Array(b-0+1).join(a||''):'';
       if(c=='d') s+=parseInt(as[i++]);
       return b?s.slice(b*-1):s;
  })
  },

  _priceCacu: function (){
    var totalPrice = 0
    for (var i = 0; i < this.data.waitPay.length; i++){
      totalPrice += this.data.waitPay[i].price
    }
    this.setData({totalFee: totalPrice})
  },


  getOrderList: function(res){
    var that = this
      var orderLists = []
      for (var i = 0; i < res.length; i++){
        var orderItem = {}
        var trolley = JSON.parse(res[i].orderContent).trolley
        var night = JSON.parse(res[i].orderContent).night
        orderItem["city"] = JSON.parse(res[i].orderContent).city
        orderItem["houseName"] = JSON.parse(res[i].orderContent).houseName
        orderItem["night"] = night
        orderItem["guestInfo"] = res[i].guestInfo
        orderItem["totalFee"] = res[i].totalFee
        var state = res[i].state
        orderItem["state"] = state
        var businessCode = res[i].businessCode
        orderItem["businessCode"] = businessCode
        orderItem["orderCode"] = res[i].orderCode
        orderItem["openId"] = res[i].openId
        if (state != 99){
        orderItem["cancelButton"] = "取消订单"
        }
        else{
          orderItem["cancelButton"] = "审核中"
        }
        orderItem["orderList"] = trolley.activityList.map(function (obj){
          var rObj = {}
          rObj["img"] = obj.picture
          rObj["name"] = obj.name
          rObj["time"] = obj.time
          rObj["price"] = obj.singlePrice * obj.num
          rObj["num"] = obj.num
          return rObj
        })
        var houseBook = {img: pathMap.L, name: trolley.houseSelect.houseType, time: trolley.houseSelect.houseTime, price: trolley.houseSelect.actualFee, num: night}
        orderItem.orderList.unshift(houseBook)
        orderLists.push(orderItem)
      }
      return orderLists;
    },
    
    // this.setData({startDate: res.data.startDate, endDate: res.data.endDate, night: res.data.night, peopleNum: res.data.peopleNum, trolley: res.data.trolley, price: res.data.price, city: res.data.city, houseName: res.data.houseName, businessCode: res.data.businessCode, openId: res.data.openId})
    // var stayDate = `${this.data.startDate} - ${this.data.endDate}`
    // var houseBook = {img: pathMap.L, name: this.data.trolley.houseSelect.houseType, time: this.data.trolley.houseSelect.houseTime, price: this.data.trolley.houseSelect.actualFee, num: this.data.night}
    // var orderList = this.data.trolley.activityList.map(function (obj){
    //   var rObj = {}
    //   rObj["img"] = obj.picture
    //   rObj["name"] = obj.name
    //   rObj["time"] = obj.time
    //   rObj["price"] = obj.singlePrice * obj.num
    //   rObj["num"] = obj.num
    //   return rObj
    // })
    // orderList.unshift(houseBook)
    

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
    var openId = wx.getStorageSync('jwtData').open_id
    this.setData({openId: openId, orderCode: options.orderCode})
    // 带有orderCode 点击取消进入
     if (options.orderCode != null){
  //   if (options.orderCode != null){
  //   this.setData({orderCode: options.orderCode, guestInfo: options.guestInfo})
  // }
  //   this.setData({orderState: options.orderState, currentTab: parseInt(options.currentTab)})

    wx.getStorage({
      key: 'bookInfo',
      success: (res) => {
        this.setData({startDate: res.data.startDate, endDate: res.data.endDate, night: res.data.night, peopleNum: res.data.peopleNum, trolley: res.data.trolley, price: res.data.price, city: res.data.city, houseName: res.data.houseName, businessCode: res.data.businessCode, openId: res.data.openId})
        var stayDate = `${this.data.startDate} - ${this.data.endDate}`
        var houseBook = {img: pathMap.L, name: this.data.trolley.houseSelect.houseType, time: this.data.trolley.houseSelect.houseTime, price: this.data.trolley.houseSelect.actualFee, num: this.data.night}
        var waitPay = this.data.trolley.activityList.map(function (obj){
        var rObj = {}
        rObj["img"] = obj.picture
        rObj["name"] = obj.name
        rObj["time"] = obj.time
        rObj["price"] = obj.singlePrice * obj.num
        rObj["num"] = obj.num
        return rObj
        })
        waitPay.unshift(houseBook)
        that.setData({waitPay: waitPay, currentTab: 0})
      },
      complete: ()=>{
        that._priceCacu()
      }
    })
   }
    // 不带有orderCode 
     else{
      var openId = wx.getStorageSync('jwtData').open_id
      var url = `${app.globalData.GLOBAL_URL}/order/wait_pay_order/?open_id=${openId}`
      wx.request({
        url: url,
        success: (res)=>{
          var orderLists = that.getOrderList(res.data)
          that.setData({orderLists: orderLists, currentTab: 1, orderState: 100})
          //that._priceCacu()
        },
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    // 定时结束
    var seconds = 60 * 15;
    var intervalId = setInterval(function(){
      var minutes = Math.floor(seconds / 60)
      var second = (seconds % 60).toPrecision(2)
      that.setData({
        failTime: `${that.printf('%02d', minutes)}:${that.printf('%02d', second)}`
      })
      if(seconds==0){
        clearInterval(intervalId);
        that.setData({
          orderState: 100
        })
      }
      seconds--
    },1000)
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