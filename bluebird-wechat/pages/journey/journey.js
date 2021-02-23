const FOOD_URL = "../../images/icons/activities/food_purple.png"
const ACTIVITY_URL = "../../images/icons/activities/activity_purple.png"
const LODGING_URL = "../../images/icons/activities/lodging_purple.png"
const TRIP_URL = "../../images/icons/activities/trip_purple.png"
const pathMap = {"F": FOOD_URL, "A": ACTIVITY_URL, "L": LODGING_URL, "T": TRIP_URL}
const dayList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    journeyContent: false,
    activityList:[]
    // activityList: [{day: "周一", date: "2020-06-15", activityName: "民宿住宿 · 双人房", city: "杭州", houseName: "栖息地", dateTime: "6月15日 周一 - 6月17日 周三", activityImg: pathMap.L},
    // {day: "周三", date: "2020-06-17", activityName: "餐饮美食 · 早餐", city: "杭州", houseName: "栖息地", dateTime: "6月15日 周一 - 6月17日 周三", activityImg: pathMap.F},
    // {day: "周一", date: "2020-06-15", activityName: "餐饮美食 · 午餐", city: "杭州", houseName: "栖息地", dateTime: "6月15日 周一 - 6月17日 周三", activityImg: pathMap.F}]
  },

  // houseType: "民宿住宿 · 双人房",housePrice: 2618, houseTime: "5月26日 · 周四-6月2日 · 周日", picture: LODGING_URL,actualFee: 0, activityList: [{name: "餐饮美食 · 早餐", time: "每天上午06:00-10:00", singlePrice: 198, num: 1, picture: FOOD_URL}, {name: "餐饮美食·午餐", time: "每天上午11:00-13:00",singlePrice: 198,num: 1,picture: FOOD_URL}, {name: "民宿活动 · 烧烤", time: "5月27日 · 周五·06:00-10:00",singlePrice: 198,num: 1, picture: ACTIVITY_URL}]

  // var orderList = []
  //   var stayDate = `${this.data.startDate} - ${this.data.endDate}`
  //   var houseBook = {img: pathMap.L, name: this.data.trolley.houseSelect.houseType, time: this.data.trolley.houseSelect.houseTime, price: this.data.trolley.houseSelect.actualFee, num: this.data.night}
  //   orderList.push(houseBook)
  //   for (var i = 0; i < this.data.trolley.activityList.length; i++){
  //   var activity = {}
  //   activity["img"] = this.data.trolley.activityList[i].picture
  //   activity["name"] = this.data.trolley.activityList[i].name
  //   activity["time"] = this.data.trolley.activityList[i].time
  //   activity["price"] = this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num
  //   activity["num"] = this.data.trolley.activityList[i].num
  //   orderList.push(activity)
  /**
   * 生命周期函数--监听页面加载
   */

  onTabItemTap(item) {
    // 可以在此做自己需求的逻辑操作，如点击出现弹窗等
    
  },


  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '猫印民宿酷',
    })
    wx.setNavigationBarColor({
      backgroundColor: '#000000',
      frontColor: '#ffffff',
    })

    if ( wx.getStorageSync('jwtData') == ""){
      wx.reLaunch({
        url: "../../pages/before_login/before_login",
      })
    }

    if (wx.getStorageSync('userInfo') == ""){
      this.setData({journey: false})
    }
    if (wx.getStorageSync('userInfo') != ""){
      this.setData({journey: true})
    }

    var that = this
    var openId = wx.getStorageSync('jwtData').open_id
    wx.request({
      url: `${app.globalData.GLOBAL_URL}/order/recent_order?open_id=${openId}`,
      success: (res)=>{
        var trolley = JSON.parse(res.data[0].orderContent).trolley
        var activityList = []
        var startDate = res.data[0].startDate
        var endDate = res.data[0].endDate
        var stayDate = new Date(startDate)
        var leaveDate = new Date(endDate)
        var startDay = dayList[stayDate.getDay()]
        var endDay = dayList[leaveDate.getDay()]
        var house = "民宿住宿 · " + trolley.houseSelect.houseType
        var businessCode = res.data[0].businessCode
        wx.request({
          url: `${app.globalData.GLOBAL_URL}/house/details?business_code=${businessCode}`,
          success: (res)=>{
            var city = res.data.city
            var houseName = res.data.houseName
            // that.setData({city: city, houseName: houseName})
            var dateTime = `${startDate} ${startDay} - ${endDate} ${endDay}` 
            var houseBook = {day: startDay, date: startDate, activityName: trolley.houseSelect.houseType, city: city, houseName: houseName, dateTime: dateTime, activityImg: pathMap.L}
            activityList.push(houseBook)
            for (var i = 0; i < trolley.activityList.length; i++){
                var activity = {}
                activity["day"] = startDay
                activity["date"] = startDate
                activity["activityName"] = trolley.activityList[i].name
                activity["city"] = city
                activity["houseName"] = houseName
                activity["dateTime"] = dateTime
                activity["activityImg"] = trolley.activityList[i].picture
                activityList.push(activity)
            }
            that.setData({activityList: activityList})
            if (that.data.activityList == []){
              that.setData({journeyContent: false})
            }
          }
        })
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