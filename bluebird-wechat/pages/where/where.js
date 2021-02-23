// pages/where/where.js
import { unique } from "../../utils/util.js"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityList: ["杭州", "北京", "上海", "大理", "三亚", "苏州", "成都", "宁波", "广州", "重庆"],
    sList: []
  },

  cityChoose: function (e){
    let searchList = this.data.sList
    searchList = unique(searchList)
    var city = this.data.cityList[e.currentTarget.id]
    if (searchList.length < 3 && (!searchList.includes(city))){
    searchList.push(city)
    }else if(searchList.length >= 3 && (!searchList.includes(city))){
      searchList.shift()
      searchList.push(city)
    }
    console.log("choose"+searchList)
    wx.setStorage({
      data: searchList,
      key: 'searchList',
    })
    var pages = getCurrentPages()
    if(pages.length > 1){
    var prePage = pages[pages.length - 2]
    prePage.setData({city: city})
    }
    wx.navigateBack({
      delta: 1
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
    wx.getStorage({
      key: 'searchList',
      success: (res) =>{
        if(res.data != undefined)
        {
          that.setData({sList: res.data})
          console.log(res.data.searchList)
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