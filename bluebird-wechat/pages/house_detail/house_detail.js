const watch = require("../../utils/watch.js");
const app = getApp()
const SCROLL_LEFT = wx.getSystemInfoSync().windowWidth
const WINDOW_HEIGHT = wx.getStorageInfoSync().windowHeight
const FOOD_URL = "../../images/icons/activities/food_purple.png"
const ACTIVITY_URL = "../../images/icons/activities/activity_purple.png"
const LODGING_URL = "../../images/icons/activities/lodging_purple.png"
const TRIP_URL = "../../images/icons/activities/trip_purple.png"
const pathMap = {"F": FOOD_URL, "A": ACTIVITY_URL, "L": LODGING_URL, "T": TRIP_URL}
const DATE_TIME_LIST = ["周日","周一","周二","周三","周四","周五","周六"]
const MONTH_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

var currentDateTime = new Date()
var currentTimestamp = currentDateTime.getTime()
var d = new Date
var tomorrow = new Date(d.setDate(d.getDate() + 1))
var initMonth = currentDateTime.getMonth() + 1
var initDay = DATE_TIME_LIST[currentDateTime.getDay()]
var initDate = currentDateTime.getDate()
var initYear = currentDateTime.getFullYear()
var tomoMonth = tomorrow.getMonth() + 1
var tomoDay = DATE_TIME_LIST[tomorrow.getDay()] 
var tomoDate = tomorrow.getDate()
var tomoYear = tomorrow.getFullYear()
var tomorrowTimestamp = tomorrow.getTime()


Page({
  scrollLeft: 0,
  /**
   * 页面的初始数据
   */
  data: {

    bookText: "预订房型",
    totalFee: 0,
    actualFee: 0,
    scrollLeft: 0,
    headImg: "../../images/003.jpg",
    itemNum: 0,
    price: 0,
    showModalStatus: false,
    roomDetails: {
      livingRoom: {name: "客厅", description: "这是一个客厅", pictureUrl: ["../../images/002.jpg", "../../images/003.jpg"]},
      bushRoom: {name: "卫生间", description: "这是一个卫生间", pictureUrl: ["../../images/002.jpg", "../../images/003.jpg"]},
      bedRoom: {name: "卧室", description: "这是一个卧室", pictureUrl: ["../../images/002.jpg", "../../images/003.jpg"]}
    },
    button: 1,

    // trolleyList: [
    //   {city: "杭州", houseName: "栖息地民宿",houseType: "民宿住宿 · 双人房",housePrice: 2618, houseTime: "5月26日 · 周四-6月2日 · 周日", picture: LODGING_URL, activityList: [{name: "餐饮美食 · 早餐", time: "每天上午06:00-10:00", singlePrice: 198, num: 1, picture: FOOD_URL}, {name: "餐饮美食·午餐", time: "每天上午11:00-13:00",singlePrice: 198,num: 1,picture: FOOD_URL}, {name: "民宿活动 · 烧烤", time: "5月27日 · 周五·06:00-10:00",singlePrice: 198,num: 1, picture: ACTIVITY_URL}]},
    //   {city: "北京", houseName: "天安门民宿",houseType: "民宿住宿 · 单人房",housePrice: 4458, houseTime: "5月26日 · 周四-6月2日 · 周日", picture: LODGING_URL, activityList: [{name: "民宿活动 · 烧烤", time: "5月31日 18:00-20:00",singlePrice: 299,num: 1, picture: ACTIVITY_URL}, {name: "餐饮美食 · 午餐", time: "每天上午11:00-13:00",singlePrice: 198,num: 1, picture: FOOD_URL}, {name: "民宿活动 · 采茶", time: "5月29日 · 周五·06:00-10:00",singlePrice: 228,num: 1, picture: ACTIVITY_URL}]}
    // ],
    

    // trolley: {
    //   houseType: "民宿住宿 · 双人房",housePrice: 2618, houseTime: "5月26日 · 周四-6月2日 · 周日", picture: LODGING_URL,actualFee: 0, activityList: [{name: "餐饮美食 · 早餐", time: "每天上午06:00-10:00", singlePrice: 198, num: 1, picture: FOOD_URL}, {name: "餐饮美食·午餐", time: "每天上午11:00-13:00",singlePrice: 198,num: 1,picture: FOOD_URL}, {name: "民宿活动 · 烧烤", time: "5月27日 · 周五·06:00-10:00",singlePrice: 198,num: 1, picture: ACTIVITY_URL}]
    // },

    trolley: {houseSelect: {houseSelected: false, actualFee: 0}, activityList: []},
    navbar: ["预定", "便利设施", "预定须知", "参观民宿"],
    navbar1: ["民宿住宿", "民宿活动", "餐饮美食", "出行接送"],
    currentTab: 0,
    currentTab1: 0,
    // city: '杭州市',
    // houseName: '栖息地民宿',
    roomUrl: "../../images/004.jpg",
    remind: "请注意不要携带宠物进入民宿，入住之前请携带身份证。",
    
    peopleNum: 0,
    
    // typeList: [{typeButton: "双人房",
    //             details: {typeBed: "双床", typeAreaLow: "15", typeAreaHigh: "25", typeNum: 2},
    //             typePrice: 200, select: false},
    //             {typeButton: "单人房",
    //             details: {typeBed: "单床", typeAreaLow: "10", typeAreaHigh: "20", typeNum: 1},
    //             typePrice: 100, select: false},
    //             {typeButton: "豪华房", 
    //             details: {typeBed: "特大床", typeAreaLow: "30", typeAreaHigh: "50", typeNum: 3},
    //             typePrice: 300, select: false}],

    currentTypeSelect: 100,

    discountName: "夏季特惠",

    discountPercent: 7,

    // foodList: [{name: "早餐", material: "馒头，包子，粽子，豆浆", time: "供应时间: 每天上午06:00-10:00", price: 19, num: 0}, {name: "午餐", material: "米饭，肉末茄子，辣子鸡，土豆烧肉", time: "供应时间: 每天上午11:00-13:00", price: 19, num: 0}, {name: "晚餐", material: "水饺", time: "供应时间: 每天上午18:00-19:00", price: 19, num: 0}],

    // goodsList: [{name: "西湖龙井茶叶", description: "龙井茶叶描述", price: 19, num: 0}, {name: "宣威火腿", description: "香味浓郁，色泽鲜艳", price: 19, num: 0}, {name: "毛豆腐", description: "毛豆腐的描述描述描述", price: 19, num: 0}],

    foodTotalPrice: 0,
    activityTotalPrice: 0,

    houseActivityList:[{activityImg: "../../images/tea.jpg", activityName: "采茶", price: "60",description:"在绿色的茶海中徜徉", unfold: false, unfoldUrl: "../../images/icons/unfold.png", timeList: [{year: 2020, date: "10月1日·周四 · 10 : 30 - 12 : 30", num: 0}, {year: 2020, date: "10月3日·周六 · 10 : 30 - 12 : 30", num: 0}, {year: 2020, date: "10月5日·周一 · 10 : 30 - 12 : 30", num: 0}]},

    {activityImg: "../../images/bbq.jpg", activityName: "烧烤", price: "70",description:"快乐的烧烤大餐", unfold: false, unfoldUrl: "../../images/icons/unfold.png", timeList: [{year: 2020, date: "10月1日·周四 · 18 : 30 - 20 : 30", num: 0}, {year: 2020, date: "10月3日·周六 · 18 : 30 - 20 : 30", num: 0}, {year: 2020, date: "10月5日·周一 · 18 : 30 - 20 : 30", num: 0}]},
    
    {activityImg: "../../images/bicycle.jpg", unfold: false, activityName: "骑行", price: "35", description:"强健体魄的骑行运动",  unfoldUrl: "../../images/icons/unfold.png", timeList: [{year: 2020, date: "10月1日·周四 · 15 : 30 - 18 : 30", num: 0}, {year: 2020, date: "10月3日·周六 · 15 : 30 - 18 : 30", num: 0}, {year: 2020, date: "10月5日·周一 · 15 : 30 - 18 : 30", num: 0}]}],

    facilitiesList:[{serviceName:"基础设施", serviceUrl: "../../images/icons/facilities/base.png", contentList:["无线网络", 
  "空调", "洗衣机", "烘干机"]},
  {serviceName:"入住服务", serviceUrl: "../../images/icons/facilities/stay.png", contentList:["免费停车", 
  "自助入住", "早餐", "电梯"]},
  {serviceName:"洗浴设施", serviceUrl: "../../images/icons/facilities/bush.png", contentList:["洗发水", 
  "吹风机", "热水", "沐浴露"]}],

  // headImgUrl: "../../images/003.jpg",
  // bossName: "大卫杜夫",
  signContent: "签名",
  fix: false,
  discount: false
  },

  // houseType: "民宿住宿 · 双人房",housePrice: 2618, houseTime: "5月26日 · 周四-6月2日 · 周日", picture: LODGING_URL,actualFee: 0, activityList: [{name: "餐饮美食 · 早餐", time: "每天上午06:00-10:00", singlePrice: 198, num: 1, picture: FOOD_URL}, {name: "餐饮美食·午餐", time: "每天上午11:00-13:00",singlePrice: 198,num: 1,picture: FOOD_URL}, {name: "民宿活动 · 烧烤", time: "5月27日 · 周五·06:00-10:00",singlePrice: 198,num: 1, picture: ACTIVITY_URL}]

  bookHouse: function (e) {
    var that = this
    var startDate = `${this.data.stayMonth}月${this.data.stayDay}日`
    var endDate = `${this.data.leaveMonth}月${this.data.leaveDay}日`
    var openId = wx.getStorageSync('jwtData').open_id;
    that.setData({openId: openId})
    var bookInfo = {
      startDate: startDate,
      endDate: endDate,
      night: this.data.night,
      peopleNum: this.data.peopleNum,
      price: this.data.price,
      trolley: this.data.trolley,
      city: this.data.city,
      houseName: this.data.houseName,
      businessCode: this.data.businessCode,
      openId: this.data.openId
    }

    wx.setStorageSync('bookInfo', bookInfo)
    if (this.data.trolley.houseSelect.houseSelected == false){
      wx.pageScrollTo({
        scrollTop: that.data.fixTop
      })
      that.setData({currentTab1: 0})
    }
    else if(this.data.trolley.houseSelect.houseSelected == true && this.data.trolley.activityList.length === 0){
      wx.showModal({
        content: "当前民宿有上架活动和美食等附加商品，可以加入预定篮一并结算！",
        confirmText: "直接结算",
        cancelText: "查看详情",
        confirmColor: "#945875",
        cancelColor: "#945875",
        success (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: `../../pages/book_details/book_details`,
            })
          } else if (res.cancel) {
            wx.pageScrollTo({
              scrollTop: that.data.fixTop,
            })
            that.setData({currentTab1: 1})
          }
        }
      })
    }
    else{
      // if (that.data.peopleNum == 0){
      //   wx.showModal({
      //     content: "房客人数至少为1人。",
      //     confirmText: "确定",
      //     showCancel: false
      //   })
      // }else{
      wx.navigateTo({
        url: `../../pages/book_details/book_details`,
      })
    //}
    }
  },

  bossDetail: function (e) {
    wx.navigateTo({
      url: `../../pages/boss/boss?business_code=${this.data.businessCode}`,
    })
  },

  memoryTrolley: function () {
    // var that = this
    // wx.setStorage({
    //   data: {trolley: that.data.trolley,
    //          currentTypeSelect: that.data.currentTypeSelect,
    //          singlePrice: that.data.singlePrice,
    //          totalFee: that.data.totalFee,
    //          actualFee: that.data.actualFee,
    //          typeList: that.data.typeList,
    //          foodList: that.data.foodList,
    //          itemNum: that.data.itemNum,
    //          foodTotalPrice: that.data.foodTotalPrice,
    //          goodsList: that.data.goodsList,
    //          houseActivityList: that.data.houseActivityList,
    //          activityTotalPrice: that.data.activityTotalPrice,
    //   },
    //   key: 'trolley',
    // })
  },

  typeChange: function (e) {
    var that = this
    if (this.data.currentTypeSelect == e.currentTarget.id){
      this.data.typeList[e.currentTarget.id].select = false
      this.data.trolley.houseSelect = {houseSelected: false}
      let priceNew = this.data.price - this.data.totalFee
      this.setData({currentTypeSelect: 100, singlePrice: 0, totalFee: 0, actualFee: 0, trolley: this.data.trolley, price: priceNew, typeList: this.data.typeList})
      if (this.data.totalFee == 0) {
        this.setData({bookText: "预定房型"})
      }
    }
      else{
      var singlePrice = this.data.typeList[e.currentTarget.id].typePrice
      var night = this.data.night
      var totalFee = parseFloat(this.keepTwoDecimalFull(singlePrice * night))
      var actualFee = totalFee
        if (this.data.currentTypeSelect == 100){
        let priceNew = this.keepTwoDecimalFull(parseFloat(this.data.price) + totalFee)
        //priceNew = this.keepTwoDecimalFull(priceNew)
        this.setData({price: priceNew})
        }
        else{
        let priceNew = this.keepTwoDecimalFull(parseFloat(this.data.price) - this.data.totalFee + totalFee)
        this.setData({price: priceNew})
        }
      //this.data.price += actualFee
      this.data.trolley.houseSelect.actualFee = actualFee
      this.data.trolley.houseSelect.houseType = this.data.typeList[e.currentTarget.id].typeButton
      let houseTime = `${this.data.stayMonth}月${this.data.stayDay}日 - ${this.data.leaveMonth}月${this.data.leaveDay}日`
      this.data.trolley.houseSelect.houseTime = houseTime
      this.data.trolley.houseSelect.houseSelected = true
      for (var i = 0; i < this.data.typeList.length; i++){
      if (i == e.currentTarget.id){
      this.data.typeList[i].select = true
      }
      else{
      this.data.typeList[i].select = false
      }
      }
      this.data.trolley.houseSelect.picture = pathMap.L
      // this.data.price += this.data.trolley.houseSelect.actualFee
      this.setData({currentTypeSelect: e.currentTarget.id, singlePrice: singlePrice, totalFee: totalFee, actualFee: actualFee, trolley: this.data.trolley, typeList: this.data.typeList})
      if (this.data.totalFee != 0) {
        this.setData({bookText: "去结算"})
      }
    }
    this.memoryTrolley()
  },

  accessMap: function (e) {
    wx.navigateTo({
      url: `../../pages/map/map?key_word=${this.data.address.split(/[0-9]+/)[0]}&city=${this.data.city}`,
    })
  },

  subPeople: function (e) {
    if (this.data.peopleNum > 0){
    this.data.peopleNum--
    this.setData({peopleNum: this.data.peopleNum})
    }
  },

  addPeople: function (e) {
    this.data.peopleNum++
    this.setData({peopleNum: this.data.peopleNum})
  },

  dateSelect: function (e) {
    wx.navigateTo({
      url: '../../pages/calendar/calendar',
    })
  },

  like: function (e){
    var that = this
    if (this.data.like == false){
    this.setData({likeUrl: "../../images/icons/like_purple.png", like: true})
    wx.request({
      url: `${app.globalData.GLOBAL_URL}/keep_house/keep?open_id=${that.data.openId}&business_code=${that.data.businessCode}`,
      method: "POST"
    }
    )
  }
    else{
      this.setData({likeUrl: "../../images/icons/like_grey.png", like: false})
      wx.request({
        url: `${app.globalData.GLOBAL_URL}/keep_house/unlike?open_id=${that.data.openId}&business_code=${that.data.businessCode}`,
        method: "PUT"
      })
    }
    },

  share: function (e){
    wx.showModal({
      content: "点击右上角按钮，可以转发和收藏哦！",
      showCancel: false,
      confirmColor: "#5E7E7E"
    })
  },

  scrollTopFun(e){
    let that = this;
    that.top = e.detail.scrollTop;
    // console.log(top)
    that.$apply();
  },

  // 活动栏的折叠与展开
  activityUnfold: function (e){
    if (!this.data.houseActivityList[e.currentTarget.id].unfold){
      this.data.houseActivityList[e.currentTarget.id].unfold = true
      this.data.houseActivityList[e.currentTarget.id].unfoldUrl = "../../images/icons/fold.png"
    this.setData({houseActivityList: this.data.houseActivityList})
    } else{
      this.data.houseActivityList[e.currentTarget.id].unfold = false
      this.data.houseActivityList[e.currentTarget.id].unfoldUrl = "../../images/icons/unfold.png"
    this.setData({houseActivityList: this.data.houseActivityList})
    }
  },

  //美食
  addToTrolley: function(e){
    if(this.data.foodList[e.currentTarget.id].num == 0){
    let thatList = this.data.foodList;
    thatList[e.currentTarget.id].num++
    this.data.itemNum++
    let foodString = `餐饮美食·${thatList[e.currentTarget.id].name}`
    let foodTime = thatList[e.currentTarget.id].time
    let foodNum = thatList[e.currentTarget.id].num
    let foodSinglePrice = thatList[e.currentTarget.id].price
    this.data.trolley.activityList.push(
    {name: foodString, time: foodTime, singlePrice: foodSinglePrice, num: foodNum, picture: FOOD_URL})

    var foodTotalPrice = 0
    var totalPrice = 0
    totalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.houseSelect.actualFee)))

    for (var i = 0; i < this.data.trolley.activityList.length; i++){
      totalPrice += this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num
      if (this.data.trolley.activityList[i].name.split("·")[0] == "餐饮美食" || this.data.trolley.activityList[i].name.split("·")[0] == "美食特产")
      foodTotalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num)))
    }

    this.setData({foodList: thatList, itemNum: this.data.itemNum, trolley: this.data.trolley, foodTotalPrice: foodTotalPrice, price: totalPrice})
    }
    this.memoryTrolley()
  },

  //美食特产
  addToTrolley2: function(e){
    if(this.data.goodsList[e.currentTarget.id].num == 0){
    let thatList = this.data.goodsList;
    thatList[e.currentTarget.id].num++
    this.data.itemNum++
    let goodsString = `美食特产·${thatList[e.currentTarget.id].name}`
    let goodsDescription = thatList[e.currentTarget.id].description
    let goodsNum = thatList[e.currentTarget.id].num
    let goodsSinglePrice = thatList[e.currentTarget.id].price
    this.data.trolley.activityList.push(
      {name: goodsString, time: goodsDescription, singlePrice: goodsSinglePrice, num: goodsNum, picture: FOOD_URL})

      var foodTotalPrice = 0
      var totalPrice = 0
      totalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.houseSelect.actualFee)))

      for (var i = 0; i < this.data.trolley.activityList.length; i++){
        totalPrice += this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num
        if (this.data.trolley.activityList[i].name.split("·")[0] == "餐饮美食" || this.data.trolley.activityList[i].name.split("·")[0] == "美食特产")
        foodTotalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num)))
      }
      this.setData({goodsList: thatList, itemNum: this.data.itemNum, trolley: this.data.trolley, foodTotalPrice: foodTotalPrice, price: totalPrice})
    }
    this.memoryTrolley()
  },
  
  //将活动加入购物车
  addToTrolley3: function(e){
    let outerId = e.currentTarget.id.split("?")[0]
    let innerId = e.currentTarget.id.split("?")[1]
    if(this.data.houseActivityList[outerId].timeList[innerId].num == 0){
      this.data.houseActivityList[outerId].timeList[innerId].num++
      this.data.itemNum++
    let activityString = `民宿活动·${this.data.houseActivityList[outerId].activityName}`
    let activityTime = this.data.houseActivityList[outerId].timeList[innerId].date
    let activityNum = this.data.houseActivityList[outerId].timeList[innerId].num
    let activitySinglePrice = this.data.houseActivityList[outerId].price
    this.data.trolley.activityList.push(
      {name: activityString, time: activityTime, singlePrice: activitySinglePrice, num: activityNum, picture: ACTIVITY_URL})

      var totalPrice = 0
      var activityTotalPrice = 0
      totalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.houseSelect.actualFee)))
      totalPrice = parseFloat(this.keepTwoDecimalFull(totalPrice))

      for (var i = 0; i < this.data.trolley.activityList.length; i++){
        totalPrice += this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num
        if (this.data.trolley.activityList[i].name.split("·")[0] == "民宿活动")
        activityTotalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num)))
      }
    this.setData({houseActivityList: this.data.houseActivityList, itemNum: this.data.itemNum, trolley: this.data.trolley, activityTotalPrice: activityTotalPrice, price: totalPrice})
    }
    this.memoryTrolley()
  },

  addTrolley: function(e){
    let thatList = this.data.foodList;
    thatList[e.currentTarget.id].num++
    this.data.itemNum++
    for (var i = 0; i < this.data.trolley.activityList.length; i++){
      if (this.data.trolley.activityList[i].name.split("·")[1] == thatList[e.currentTarget.id].name){
        this.data.trolley.activityList[i].num = thatList[e.currentTarget.id].num
        this.setData({trolley: this.data.trolley})
      }
    }
    var totalPrice = 0
    var foodTotalPrice = 0
    totalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.houseSelect.actualFee)))

    for (var i = 0; i < this.data.trolley.activityList.length; i++){
      totalPrice += this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num
      if (this.data.trolley.activityList[i].name.split("·")[0] == "餐饮美食" || this.data.trolley.activityList[i].name.split("·")[0] == "美食特产")
      foodTotalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num)))
    }
    this.setData({foodList: thatList, itemNum: this.data.itemNum, foodTotalPrice: foodTotalPrice, price: totalPrice})
    this.memoryTrolley()
  },

  addTrolley2: function(e){
    let thatList = this.data.goodsList;
    thatList[e.currentTarget.id].num++
    this.data.itemNum++
    for (var i = 0; i < this.data.trolley.activityList.length; i++){
      if (this.data.trolley.activityList[i].name.split("·")[1] == thatList[e.currentTarget.id].name){
        this.data.trolley.activityList[i].num = thatList[e.currentTarget.id].num
        this.setData({trolley: this.data.trolley})
      }
    }
    var totalPrice = 0
    var foodTotalPrice = 0
    totalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.houseSelect.actualFee)))

    for (var i = 0; i < this.data.trolley.activityList.length; i++){
      totalPrice += this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num
      if (this.data.trolley.activityList[i].name.split("·")[0] == "餐饮美食" || this.data.trolley.activityList[i].name.split("·")[0] == "美食特产")
      foodTotalPrice += parseFloat(this.keepTwoDecimalFull(this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num))
    }
    this.setData({goodsList: thatList, itemNum: this.data.itemNum, foodTotalPrice: foodTotalPrice, price: totalPrice})
    this.memoryTrolley()
  },

  addTrolley3: function(e){
    let outerId = e.currentTarget.id.split("?")[0]
    let innerId = e.currentTarget.id.split("?")[1]
    this.data.houseActivityList[outerId].timeList[innerId].num++
    this.data.itemNum++
    for (var i = 0; i < this.data.trolley.activityList.length; i++){
      if (this.data.trolley.activityList[i].name.split("·")[1] == this.data.houseActivityList[outerId].activityName &&
        this.data.trolley.activityList[i].time == this.data.houseActivityList[outerId].timeList[innerId].date){
        this.data.trolley.activityList[i].num = this.data.houseActivityList[outerId].timeList[innerId].num
        this.setData({trolley: this.data.trolley})
      }
    }
    var totalPrice = 0
    var activityTotalPrice = 0
    totalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.houseSelect.actualFee)))


    for (var i = 0; i < this.data.trolley.activityList.length; i++){
       totalPrice += this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num
       if (this.data.trolley.activityList[i].name.split("·")[0] == "民宿活动")
       activityTotalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num)))
     }
    this.setData({houseActivityList: this.data.houseActivityList, itemNum: this.data.itemNum, activityTotalPrice: activityTotalPrice, price: totalPrice})
    this.memoryTrolley()
  },

  subTrolley: function(e) {
    if(this.data.foodList[e.currentTarget.id].num > 0){
      let thatList = this.data.foodList;
      thatList[e.currentTarget.id].num--
      this.data.itemNum--
      this.setData({foodList: thatList, itemNum: this.data.itemNum})
      for (var i = 0; i < this.data.trolley.activityList.length; i++){
        if (this.data.trolley.activityList[i].name.split("·")[1] == thatList[e.currentTarget.id].name){
          this.data.trolley.activityList[i].num = thatList[e.currentTarget.id].num
          if (this.data.trolley.activityList[i].num == 0){
            this.data.trolley.activityList.splice(i, 1)
          }
          this.setData({trolley: this.data.trolley})
        }
      }
    var totalPrice = 0
    var foodTotalPrice = 0
    totalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.houseSelect.actualFee)))

    for (var i = 0; i < this.data.trolley.activityList.length; i++){
      totalPrice += this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num
      if (this.data.trolley.activityList[i].name.split("·")[0] == "餐饮美食" || this.data.trolley.activityList[i].name.split("·")[0] == "美食特产")
      foodTotalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num)))
    }
    this.setData({foodTotalPrice: foodTotalPrice, price: totalPrice})
    }
    this.memoryTrolley()
  },

  subTrolley2: function(e) {
    if(this.data.goodsList[e.currentTarget.id].num > 0){
      let thatList = this.data.goodsList;
      thatList[e.currentTarget.id].num--
      this.data.itemNum--
      for (var i = 0; i < this.data.trolley.activityList.length; i++){
        if (this.data.trolley.activityList[i].name.split("·")[1] == thatList[e.currentTarget.id].name){
          this.data.trolley.activityList[i].num = thatList[e.currentTarget.id].num
          if (this.data.trolley.activityList[i].num == 0){
            this.data.trolley.activityList.splice(i, 1)
          }
          this.setData({trolley: this.data.trolley})
        }
      }
      this.setData({goodsList: thatList, itemNum: this.data.itemNum})

      var totalPrice = 0
      var foodTotalPrice = 0
      totalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.houseSelect.actualFee)))

      for (var i = 0; i < this.data.trolley.activityList.length; i++){
        totalPrice += this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num
        if (this.data.trolley.activityList[i].name.split("·")[0] == "餐饮美食" || this.data.trolley.activityList[i].name.split("·")[0] == "美食特产")
        foodTotalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num)))
      }
    }
      this.setData({foodTotalPrice: foodTotalPrice, price: totalPrice})
      this.memoryTrolley()
  },

  subTrolley3: function(e) {
    let outerId = e.currentTarget.id.split("?")[0]
    let innerId = e.currentTarget.id.split("?")[1]
    if(this.data.houseActivityList[outerId].timeList[innerId].num > 0){
      this.data.houseActivityList[outerId].timeList[innerId].num--
      this.data.itemNum--
      var totalPrice = 0
      var activityTotalPrice = 0
      totalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.houseSelect.actualFee)))

      
      for (var i = 0; i < this.data.trolley.activityList.length; i++){
        if (this.data.trolley.activityList[i].name.split("·")[1] == this.data.houseActivityList[outerId].activityName &&
          this.data.trolley.activityList[i].time == this.data.houseActivityList[outerId].timeList[innerId].date){
          this.data.trolley.activityList[i].num = this.data.houseActivityList[outerId].timeList[innerId].num
          if (this.data.trolley.activityList[i].name.split("·")[0] == "民宿活动")
          activityTotalPrice += this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num
          this.setData({houseActivityList: this.data.houseActivityList, itemNum: this.data.itemNum, activityTotalPrice: activityTotalPrice, price: totalPrice})
          if (this.data.trolley.activityList[i].num == 0){
            this.data.trolley.activityList.splice(i, 1)
          }
          this.setData({trolley: this.data.trolley})
        }
        try{
        totalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num)))
        }
        catch(TypeError){
          console.log("xxx")
        }
      }
      this.setData({houseActivityList: this.data.houseActivityList, itemNum: this.data.itemNum, price: totalPrice})
  }
  this.memoryTrolley()
  },

  trolleyAdd: function (e) {
    this.data.trolley.activityList[e.currentTarget.id].num++
    // var totalPrice = 0
    // for (var i = 0; i < this.data.trolley.activityList.length; i++){
    //   totalPrice += this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num
    // }
    var totalPrice = 0
    var foodTotalPrice = 0
    var activityTotalPrice = 0
    totalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.houseSelect.actualFee)))

    for (var i = 0; i < this.data.trolley.activityList.length; i++){
    totalPrice += this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num
    if (this.data.trolley.activityList[i].name.split("·")[0] == "餐饮美食" || this.data.trolley.activityList[i].name.split("·")[0] == "美食特产"){
    foodTotalPrice += this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num
    }
    else if(this.data.trolley.activityList[i].name.split("·")[0] == "民宿活动"){

    activityTotalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num)))
    }
    }
    this.setData({foodTotalPrice: foodTotalPrice, price: totalPrice, activityTotalPrice: activityTotalPrice})

    if (this.data.trolley.activityList[e.currentTarget.id].name.split("·")[0] == "餐饮美食"){
      for (var i = 0; i < this.data.foodList.length; i++){
        if (this.data.trolley.activityList[e.currentTarget.id].name.split("·")[1] == this.data.foodList[i].name){
          this.data.foodList[i].num++
          this.data.itemNum++
          this.setData({trolley: this.data.trolley, foodList: this.data.foodList, itemNum: this.data.itemNum})
        }
      }
    }else if(this.data.trolley.activityList[e.currentTarget.id].name.split("·")[0] == "美食特产")
    {
      for (var i = 0; i < this.data.goodsList.length; i++){
        if (this.data.trolley.activityList[e.currentTarget.id].name.split("·")[1] == this.data.goodsList[i].name && 
        this.data.trolley.activityList[e.currentTarget.id].time == this.data.goodsList[i].description){
          this.data.goodsList[i].num++
          this.data.itemNum++
          this.setData({trolley: this.data.trolley, goodsList: this.data.goodsList, itemNum: this.data.itemNum})
        }
      }
    }else if(this.data.trolley.activityList[e.currentTarget.id].name.split("·")[0] == "民宿活动")
    {
      for (var i = 0; i < this.data.houseActivityList.length; i++){
        if (this.data.trolley.activityList[e.currentTarget.id].name.split("·")[1] == this.data.houseActivityList[i].activityName){
          for (var j = 0; j < this.data.houseActivityList[i].timeList.length; j++)
          {
            if (this.data.trolley.activityList[e.currentTarget.id].time == this.data.houseActivityList[i].timeList[j].date){
              this.data.itemNum++
              this.data.houseActivityList[i].timeList[j].num++
              this.setData({trolley: this.data.trolley, houseActivityList: this.data.houseActivityList, itemNum: this.data.itemNum})
            }
          }
        }
      }
    }
    this.memoryTrolley()
  },

  trolleySub: function (e) {
    if (this.data.trolley.activityList[e.currentTarget.id].num > 0){
    this.data.trolley.activityList[e.currentTarget.id].num--
    let totalPrice = 0
    let foodTotalPrice = 0
    let activityTotalPrice = 0
    totalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.houseSelect.actualFee)))

    for (var i = 0; i < this.data.trolley.activityList.length; i++){
    totalPrice += this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num
    if (this.data.trolley.activityList[i].name.split("·")[0] == "餐饮美食" || this.data.trolley.activityList[i].name.split("·")[0] == "美食特产"){
    foodTotalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num)))
    }
    else if(this.data.trolley.activityList[i].name.split("·")[0] == "民宿活动"){
    activityTotalPrice += parseFloat(this.keepTwoDecimalFull(parseFloat(this.data.trolley.activityList[i].singlePrice * this.data.trolley.activityList[i].num)))
    }
    }
    this.setData({foodTotalPrice: foodTotalPrice, price: totalPrice, activityTotalPrice: activityTotalPrice})
    if (this.data.trolley.activityList[e.currentTarget.id].name.split("·")[0] == "餐饮美食"){
      for (var i = 0; i < this.data.foodList.length; i++){
        if (this.data.trolley.activityList[e.currentTarget.id].name.split("·")[1] == this.data.foodList[i].name){
          this.data.foodList[i].num--
          this.data.itemNum--
          this.setData({trolley: this.data.trolley, foodList: this.data.foodList, itemNum: this.data.itemNum})
        }
        }
    }else if(this.data.trolley.activityList[e.currentTarget.id].name.split("·")[0] == "美食特产")
    {
      for (var i = 0; i < this.data.goodsList.length; i++){
        if (this.data.trolley.activityList[e.currentTarget.id].name.split("·")[1] == this.data.goodsList[i].name &&  this.data.trolley.activityList[e.currentTarget.id].time == this.data.goodsList[i].description){
          this.data.goodsList[i].num--
          this.data.itemNum--
          this.setData({trolley: this.data.trolley, goodsList: this.data.goodsList, itemNum: this.data.itemNum})
        }
      }
    }else if(this.data.trolley.activityList[e.currentTarget.id].name.split("·")[0] == "民宿活动")
    {
      for (var i = 0; i < this.data.houseActivityList.length; i++){
        if (this.data.trolley.activityList[e.currentTarget.id].name.split("·")[1] == this.data.houseActivityList[i].activityName){
          for (var j = 0; j < this.data.houseActivityList[i].timeList.length; j++)
          {
            if (this.data.trolley.activityList[e.currentTarget.id].time == this.data.houseActivityList[i].timeList[j].date){
              this.data.itemNum--
              this.data.houseActivityList[i].timeList[j].num-- 
              this.setData({trolley: this.data.trolley, houseActivityList: this.data.houseActivityList, itemNum: this.data.itemNum})
            }
          }
        }
      }
    }
    for (var i = 0; i < this.data.trolley.activityList.length; i++){
      if (this.data.trolley.activityList[i].num == 0){
        if (this.data.trolley.activityList[i].num == 0){
          this.data.trolley.activityList.splice(i, 1)
        }
        this.setData({trolley: this.data.trolley})
      }
      }
    }
    this.memoryTrolley()
    },

  keepTwoDecimalFull: function(num){
      var result = parseFloat(num);
      if (isNaN(result)) {
      //alert('传递参数错误，请检查！');
      return false;
      }
      result = Math.round(num * 100) / 100;
      var s_x = result.toString();
      var pos_decimal = s_x.indexOf('.');
      if (pos_decimal < 0) {
      pos_decimal = s_x.length;
      s_x += '.';
      }
      while (s_x.length <= pos_decimal + 2) {
      s_x += '0';
      }
      return parseFloat(s_x).toFixed(2);
     },

  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  navbarTap1: function(e){
    this.setData({
      currentTab1: e.currentTarget.dataset.idx
    })
  },

  subtract: function (e) {
    // console.log(e)
  },

  trolleyTap: function (e) {
    this.setData({button: 1})
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },

  util: function(currentStatu){
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200,  //动画时长
      timingFunction: "linear", //线性
      delay: 0 //0则不延迟
    });
    
    // 第2步：这个动画实例赋给当前的动画实例
    this.animation = animation;
 
    // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停

    animation.translateY(WINDOW_HEIGHT + 50).step()

    // 第4步：导出动画对象赋给数据对象储存
    this.setData({
      animationData: animation.export()
    })
    
    // 第5步：设置定时器到指定时候后，执行第二组动画
    setTimeout(function () {
      // 执行第二组动画：Y轴不偏移，停
      animation.translateY(0).step()
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
      this.setData({
        animationData: animation
      })
      
      //关闭抽屉
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)
  
    // 显示抽屉
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

    var stayData = {"startDay": initDay,
      "startTimeStamp": currentTimestamp,
      "endTimeStamp": tomorrowTimestamp,
      "endDay": tomoDay,
      "startMonth": initMonth, 
      "endMonth": tomoMonth,
      "startDate": initDate,
      "endDate": tomoDate,
      "startYear": initYear,
      "endYear": tomoYear,
      "nights": 1
    }
      wx.setStorage({
        key: "stayData",
        data: stayData
      })
      
    var openId = wx.getStorageSync('jwtData').open_id
    var businessCode = options.business_code
    this.setData({businessCode: businessCode, openId: openId})
    var that=this

    //确认用户是否喜欢民宿
    wx.request({
      url: `${app.globalData.GLOBAL_URL}/keep_house/like_or_not?open_id=${openId}&business_code=${businessCode}`,
      success: (res)=>{
        if (res.data.length == 0){
          that.setData({like: false, likeUrl: "../../images/icons/like_grey.png"})
        }
        else{
          that.setData({like: true, likeUrl: "../../images/icons/like_purple.png"})
        }
      }
    })

    wx.request({
      url: `${app.globalData.GLOBAL_URL}/house/details?business_code=${businessCode}`,
      success: (res)=>{
        var headImg = app.globalData.GLOBAL_URL + res.data.headImgPath
        var city = res.data.city
        var houseName = res.data.houseName
        var style = res.data.style
        var [tag1, tag2, tag3] = res.data.tags.split("|")
        var introduceDetails = res.data.houseIntroduce
        that.setData({address: res.data.address, headImg: headImg, bossName: res.data.businessName, city: city, houseName: houseName, style: style, tag1: tag1, tag2: tag2, tag3: tag3, introduceDetails: introduceDetails})
      }
    })

    wx.request({
      url: `${app.globalData.GLOBAL_URL}/picture/scenic_path?business_code=${businessCode}`,
      success: (res) => {
        var scenicList = []
        for (var i = 0; i < res.data.length; i++){
          var urls = {}
          var url = app.globalData.GLOBAL_URL + res.data[i]
          urls["proUrl"] = url
          scenicList.push(urls)
        }
        that.setData({proList: scenicList})
      }
    })

    wx.request({
      url: `${app.globalData.GLOBAL_URL}/room/get_room?business_code=${businessCode}`,
      success: (res)=>{
        var typeList = []
        for (var i = 0; i < res.data.length; i++){
          var type = {}
          var typeDetails = {}
          type["typeButton"] = res.data[i].roomName
          typeDetails["typeBed"] = res.data[i].bedType
          typeDetails["typeAreaLow"] = res.data[i].areaLow
          typeDetails["typeAreaHigh"] = res.data[i].areaHigh
          typeDetails["typeNum"] = res.data[i].stayPeople
          type["typePrice"] = res.data[i].price
          type["select"] = false
          type["details"] = typeDetails
          typeList.push(type)
        }
        that.setData({typeList: typeList})
      }
    })

    wx.request({
      url: `${app.globalData.GLOBAL_URL}/goods/goods_set?business_code=${businessCode}`,
      success: (res)=>{
        var goodsList = []
        for (var i = 0; i < res.data.length; i++){
          var goodsItem = {}
          goodsItem["name"] = res.data[i].goodsName
          goodsItem["description"] = res.data[i].goodsDescription
          goodsItem["price"] = res.data[i].price
          goodsItem["num"] = 0
          goodsList.push(goodsItem)
        }
        that.setData({goodsList: goodsList})
      }
    })

    wx.request({
      url: `${app.globalData.GLOBAL_URL}/food/food_set?business_code=${businessCode}`,
      success: (res)=>{
        var foodList = []
        for (var i = 0; i < res.data.length; i++){
          var foodItem = {}
          var provideTime = `每天${res.data[i].startTime} - ${res.data[i].endTime}`
          foodItem["name"] = res.data[i].foodName
          foodItem["material"] = res.data[i].material
          foodItem["time"] = provideTime
          foodItem["price"] = res.data[i].price
          foodItem["num"] = 0
          foodList.push(foodItem)
        }
        that.setData({foodList: foodList})
      }
    })

    wx.request({
      url: `${app.globalData.GLOBAL_URL}/business/get_indoor?business_code=${businessCode}`,
      success: (res)=>{
        var roomDetails = {}
        var livingRoom = {}
        var bushRoom = {}
        var bedRoom = {}
        var kitchen = {}
        livingRoom["name"] = "客厅"
        if (res.data.indoor.length != 0){
        livingRoom["description"] = res.data.indoor[0].livingRoomIntroduce
        bushRoom["description"] = res.data.indoor[0].bushRoomIntroduce
        bedRoom["description"] = res.data.indoor[0].bedroom
        kitchen["description"] = res.data.indoor[0].kitchen
        }
        livingRoom["pictureUrl"] = res.data.livingRoomPath.map((value, index, array)=>{
          return app.globalData.GLOBAL_URL + value
        })
        bushRoom["name"] = "卫生间"
        bushRoom["pictureUrl"] = res.data.bushRoomPath.map((value, index, array)=>{
          return app.globalData.GLOBAL_URL + value
        })
        bedRoom["name"] = "卧室"
        bedRoom["pictureUrl"] = res.data.bedRoomPath.map((value, index, array)=>{
          return app.globalData.GLOBAL_URL + value
        })
        kitchen["name"] = "厨房"
        kitchen["pictureUrl"] = res.data.kitchenPath.map((value, index, array)=>{
          return app.globalData.GLOBAL_URL + value
        })
        roomDetails["livingRoom"] = livingRoom
        roomDetails["bushRoom"] = bushRoom
        roomDetails["bedRoom"] = bedRoom
        roomDetails["kitchen"] = kitchen
        that.setData({roomDetails: roomDetails})
      }
    })

    var stayData = wx.getStorageSync('stayData')
    if (stayData == ""){
      var date = new Date()
      var stayMonth = date.getMonth() + 1
      var stayDay = date.getDate()
      var tomorrow = new Date()
      tomorrow.setTime(tomorrow.getTime()+24*60*60*1000)
      var leaveMonth = tomorrow.getMonth() + 1
      var leaveDay = tomorrow.getDate()
      var nights = 1
    }
    else{
      var stayMonth = stayData.startMonth
      var stayDay = stayData.startDate
      var leaveMonth = stayData.endMonth
      var leaveDay = stayData.endDate
      var nights = stayData.nights
    }
    this.setData({stayMonth: stayMonth, stayDay: stayDay, leaveMonth: leaveMonth, leaveDay: leaveDay, night: nights})

    wx.getSystemInfo({
      success:function(res){
      console.info(res.windowHeight);
      that.setData({
      windowHeight: res.windowHeight-60
      })
      }
      })
     
    let night = this.data.night
    if (this.data.typeList != undefined){ 
    let singlePrice = this.data.typeList[0].typePrice
    }
    let totalFee = night * singlePrice
    let actualFee
    let discountNum = 0
    totalFee = singlePrice * night
    actualFee = totalFee - discountNum
    that.setData({totalFee: totalFee, singlePrice: 0, discountNum: discountNum, totalFee: 0, actualFee: 0})
    watch.setWatcher(this);
  },

  watch: {
    this: this,
    night: (oldValue, newValue) =>{
      console.log("时间变化",oldValue, newValue)
      this.setData({night: newValue})
      return newValue
    }
  },

  // touchStart: function (event)  {
  //   this.startPageX = event.changedTouches[0].pageX;
  //   console.log("startPage "+this.startPageX)
  // },

  getScrollLeft: function(e) {
    var newScroll
    var currentScroll = e.detail.scrollLeft % SCROLL_LEFT
    if (currentScroll > (SCROLL_LEFT / 2)){
      newScroll = Math.ceil(e.detail.scrollLeft / SCROLL_LEFT) * SCROLL_LEFT  
    }
    else{
      newScroll = Math.floor(e.detail.scrollLeft / SCROLL_LEFT) * SCROLL_LEFT
    }
    this.scrollLeft = newScroll
  },

  touchstart: function (e) {
    setTimeout(e =>
    this.setData({scrollLeft: this.scrollLeft}), 200)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    setTimeout(()=>{
    var query = wx.createSelectorQuery()
      query.select('#navbar').boundingClientRect(function (res) {
         that.setData({fixTop: res.top})
      }).exec()}, 500
      )
  },

  onPageScroll: function(e){
   // console.log(e.scrollTop)
    if (e.scrollTop >= this.data.fixTop){
      this.setData({fix: true})
    }
    if(e.scrollTop <= this.data.fixTop){
      this.setData({fix: false})
    }
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
    this.onLoad();
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
    
    return {
      title: "来猫印选民宿 享受优惠！",
      path: "../../pages/search/search",
      imageUrl: "../../images/icons/like_purple.png"
    }
  }
})