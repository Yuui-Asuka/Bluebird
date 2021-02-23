// pages/help/help.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionList: 
    [{content: "问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1", chosen: false,
  detail: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述", hidden: "true"},
    {content: "问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2", chosen: false,
  detail: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述", hidden: "true"},
    {content: "问题3问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1", chosen: false,
  detail: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述", hidden: "true"},
    {content: "问题4问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1", chosen: false,
    detail: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述", hidden: "true"},
    {content: "问题5问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1", chosen: false,
    detail: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述", hidden: "true"},
    {content: "问题6问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1", chosen: false,
    detail: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述", hidden: "true"}],
    unfold: "../../images/icons/unfold.png",
    fold: "../../images/icons/fold.png"
  },

  touchQ: function (e) {
    var that = this
    if(!that.data.questionList[e.currentTarget.id].chosen){
    that.data.questionList[e.currentTarget.id].chosen = true;
    } else{
      that.data.questionList[e.currentTarget.id].chosen = false;
    }
    if(that.data.questionList[e.currentTarget.id].chosen){
      that.data.questionList[e.currentTarget.id].hidden = false;
    } else{
      that.data.questionList[e.currentTarget.id].hidden = true;
    }
    this.setData({questionList: that.data.questionList})
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