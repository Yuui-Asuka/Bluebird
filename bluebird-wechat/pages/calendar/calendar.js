// pages/calendar/calendar.js
const app = getApp()
import { formatTime } from "../../utils/util.js"
const DATE_TIME_LIST = ["周日","周一","周二","周三","周四","周五","周六"]
const MONTH_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var currentDateTime = new Date()
var currentTimestamp = currentDateTime.getTime()
var d = new Date
var tomorrow = new Date(d.setDate(d.getDate() + 1))
var initMonth = currentDateTime.getMonth() + 1
var initDay = DATE_TIME_LIST[currentDateTime.getDay()] 
var initDate = currentDateTime.getDate()
var tomoMonth = tomorrow.getMonth() + 1
var tomoDay = DATE_TIME_LIST[tomorrow.getDay()] 
var tomoDate = tomorrow.getDate()
var tomorrowTimestamp = tomorrow.getTime()


      // this.setData({"startDay": initDay,
      //                "endDay": initDay,
      //                "startMonth": initMonth, 
      //                "endMonth": initMonth,
      //                "startDate": initDate,
      //                "endDate": initDate})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'timeArr[0]': currentTimestamp,
    'timeArr[1]': tomorrowTimestamp,
    monthCount: 12,
    leastDays: 1,
    timeArr: [0, 0],
    startDay: initDay,
    startMonth: initMonth,
    startDate: initDate,
    endDay: tomoDay,
    endMonth: tomoMonth,
    endDate: tomoDate,
    night: 1
  },


  _calendarFactory: function (year, month) {
      let daysCount = this._getDays(year, month);
      let startWeek = this._getWeek(year, month);
      let days = Array.from(new Array(daysCount), (val, index) => {
        return {
          text
          : index + 1,
          timestamp: new Date(`${year}/${month}/${index + 1}`).getTime()
        };
      });
      let placeholders = Array.from(new Array(startWeek), (val, index) => index + 1);
      month = MONTH_LIST[month - 1]
      return {
        year,
        month,
        days,
        startWeek,
        placeholders
      }
    },

  _createCalendars: function () {
      let calendars = [];
      let currentYear = this.data.curYear;
      let startMonth = this.data.curMonth + 1;

      for (let i = 0; i < this.data.monthCount; i++) {
        (startMonth > 12) && (startMonth = 1) && (currentYear += 1);

        calendars.push(this._calendarFactory(currentYear, startMonth));
        
        startMonth += 1;
      }

      this.setData({ calendars: calendars })
    },

  _init: function () {
      let date = new Date();
      let curYear = parseInt(date.getFullYear(), 10)
      let curMonth = parseInt(date.getMonth(), 10)
      let curDay = parseInt(date.getDate(), 10)

      this.setData({
        curYear: parseInt(curYear, 10),
        curMonth: parseInt(curMonth, 10),
        curDay: parseInt(curDay, 10)
      });

      this._createCalendars();
    },

  _getDays: function(curYear, curMonth) {
      let day = new Date(curYear, curMonth, 0);
      
      return day.getDate();
    },

  _getWeek: function(year, month) {
      let date = new Date();

      date.setYear(year);
      date.setMonth(month - 1);
      date.setDate(1);

      return date.getDay();
    },

  clearDay: function(e){
    this.setData({"timeArr[0]": 0, "timeArr[1]": 0, "night": 0})
  },

  _chooseDay: function (e) {
      const timestamp = e.currentTarget.dataset.timestamp;
      const disabled = e.currentTarget.dataset.disabled;

      if (disabled)
      {return false;}

      if (!this.data.timeArr[0] && !this.data.timeArr[1]){
        this.setData({'timeArr[0]': timestamp, "timeArr[1]": timestamp})
      }
      else if (!this.data.timeArr[0] && this.data.timeArr[1]){
        this.setData({'timeArr[1]': timestamp})
      }
      else if (this.data.timeArr[0] && this.data.timeArr[0]==this.data.timeArr[1] && this.data.timeArr[0] <= timestamp){
             this.setData({"timeArr[1]": timestamp})
          } 
      else if ((this.data.timeArr[0] && this.data.timeArr[1]) && this.data.timeArr[0]!=this.data.timeArr[1]){
        this.setData({'timeArr[0]': timestamp, "timeArr[1]": timestamp})
       // this.setData({'timeArr[0]': timestamp, "timeArr[1]": timestamp})
      }

      // if (this.data.timeArr[0]){
      //   if (this.data.timeArr[0] <= timestamp) {
      //     this.setData({"timeArr[1]": timestamp})
      //   }
      // }

      // else if(!this.data.timeArr[0] && !this.data.timeArr[1]){
      //   this.setData({'timeArr[0]': timestamp, 'timeArr[1]': timestamp})
      // }

      let startDateTime = new Date(this.data.timeArr[0])
      let endDateTime = new Date(this.data.timeArr[1])
      let startDay = DATE_TIME_LIST[startDateTime.getDay()]
      let ss = endDateTime.getDay()
      let endDay = DATE_TIME_LIST[endDateTime.getDay()]
      let startMonth = startDateTime.getMonth() + 1
      let endMonth = endDateTime.getMonth() + 1
      let startDate = startDateTime.getDate()
      let endDate = endDateTime.getDate()
      let startYear = startDateTime.getFullYear()
      let endYear = endDateTime.getFullYear()
      let nights = (this.data.timeArr[1] - this.data.timeArr[0]) / 864e5;
      var stayData = {"startDay": startDay,
      "startTimeStamp": this.data.timeArr[0],
      "endTimeStamp": this.data.timeArr[1],
      "endDay": endDay,
      "startMonth": startMonth, 
      "endMonth": endMonth,
      "startDate": startDate,
      "endDate": endDate,
      "startYear": startYear,
      "endYear": endYear,
      "nights": nights
    }
      this.setData(stayData)
      wx.setStorage({
        key: "stayData",
        data: stayData
      })


      // if (this.data.timeArr[0] && this.data.timeArr[1]) {
      //   this.setData({
      //     'timeArr[0]': timestamp,
      //     'timeArr[1]': 0
      //   })
      // } else if (!this.data.timeArr[0] || this.data.timeArr[0] > timestamp) {
      //   this.setData({
      //     'timeArr[0]': timestamp
      //   })
      // } else if (timestamp < this.data.timeArr[0]) {
      //   this.setData({
      //     'timeArr[0]': timestamp
      //   })
      // } else {
      //   let diffDay = ((timestamp - this.data.timeArr[0]) / 864e5) + 1;

      //   if (diffDay < this.data.leastDays) {  // 设置的时间小于规定的间隔
      //     wx.showToast({
      //       title: `最少选择 ${this.data.leastDays} 天`,
      //       icon: 'none'
      //     })
      //     return false;
      //   }
      //   this.setData({
      //     'timeArr[1]': timestamp
      //   })
      //}

      this._notify();
    },

    bookDetail: function(){
      let startDateTime = new Date(this.data.timeArr[0])
      let endDateTime = new Date(this.data.timeArr[1])
      if (!this.data.timeArr[0]){
        wx.showToast({
          title: '您尚未选择日期',
        })
      }
      else if ((endDateTime - startDateTime) < 2){
        wx.showToast({
          title: '请至少选择两天！',
        })
      } 
      else{
        wx.getStorage({
          key: 'stayData',
          success: (res) =>{
            var startMonth = res.data.startMonth
            var endMonth = res.data.endMonth
            var startDate = res.data.startDate
            var endDate = res.data.endDate
            var night = res.data.nights
            var dateText = `${startMonth}月${startDate}日 - ${endMonth}月${endDate}日`
            var pages = getCurrentPages()
              if(pages.length > 1){
                var prePage = pages[pages.length - 2]
                prePage.setData({dateText: dateText, startMonth: startMonth, startDate: startDate, endMonth: endMonth, endDate: endDate})
              if (prePage.data.currentTypeSelect != null){
              if (prePage.data.currentTypeSelect != 100){ 
              var singlePrice = prePage.data.typeList[prePage.data.currentTypeSelect].typePrice
              }
              else{
                var singlePrice = 0
              }    
              let totalFee = this.keepTwoDecimalFull(singlePrice * night)
              prePage.data.trolley.houseSelect.houseTime = dateText
              prePage.data.trolley.houseSelect.actualFee = totalFee
              
              let oldTotalFee = prePage.data.totalFee
              let oldPrice = prePage.data.price
              let newPrice = this.keepTwoDecimalFull(oldPrice - oldTotalFee + totalFee)

              prePage.setData({stayMonth: startMonth, leaveMonth: endMonth,
              stayDay: startDate, leaveDay: endDate, night: night, trolley: prePage.data.trolley, price:
              newPrice, totalFee: totalFee})
              }
            }
            wx.navigateBack({
              delta: 1,
            })
          }
        })
      }
      // wx.navigateTo({
      //   url: "../../pages/book_details/book_details",
      // })
    },
    
  _notify: function () {
      let count = 0;

      if (this.data.timeArr[1]) {
        count = (this.data.timeArr[1] - this.data.timeArr[0]) / 864e5;
      } else if (this.data.timeArr[0] && !this.data.timeArr[1]) {
        count = 1;
      } else {
        count = 0;
      }
      this.setData({night: count})
      let startDate = new Date(this.data.timeArr[0])
      let endDate = this.data.timeArr[1] ? new Date(this.data.timeArr[1]) : ''
      console.log(`选中 ${formatTime(startDate)} ~ ${endDate ? formatTime(endDate) : ''}，共 ${count} 天`);
      // this.triggerEvent('calendarchange', {
      //   days: this.data.timeArr,
      //   count
      // });
    },

  clearChoose: function () {
      this.setData({
        timeArr: [0, 0]
      })
      this._notify();
    },

  keepTwoDecimalFull: function(num){
      var result = parseFloat(num);
      if (isNaN(result)) {
      alert('传递参数错误，请检查！');
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
      return s_x;
     },

  // onCalendarChange: function (e) {
  //   const startDate = new Date(e.detail.days[0]);
  //   const endDate = e.detail.days[1] ? new Date(e.detail.days[1]) : '';
    
  //   console.log(`选中 ${formatTime(startDate)} ~ ${endDate ? formatTime(endDate) : ''}，共 ${e.detail.count} 天`);
  // },

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
    this._init();
    var that = this
    wx.getStorage({
      key: 'stayData',
      success: (res) =>{
        var startTimeStamp = res.data.startTimeStamp
        var endTimeStamp = res.data.endTimeStamp
        var startMonth = res.data.startMonth
        var endMonth = res.data.endMonth
        var startDate = res.data.startDate
        var endDate = res.data.endDate
        var startDay = DATE_TIME_LIST[new Date(startTimeStamp).getDay()]
        var endDay = DATE_TIME_LIST[new Date(endTimeStamp).getDay()]
        if (startTimeStamp != null && endTimeStamp != null){
        this.data.timeArr[0] = startTimeStamp
        this.data.timeArr[1] = endTimeStamp
        that.setData({timeArr: this.data.timeArr, startMonth: startMonth, endMonth: endMonth, startDate: startDate, endDate: endDate, startDay: startDay, endDay: endDay})
        }
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