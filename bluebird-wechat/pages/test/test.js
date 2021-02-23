// pages/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "hello world",
    score: 86,
    list: [],
  },
  changeData: function () {
    this.setData({
      score: 75
    })
  },
  inputFN: function (e) {
    console.log(e.detail)
    this.setData({
      myinput: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var apiData = {
      text: 2,
      name: "eric",
    }
    this.setData(apiData);

    console.log("load");
    
    var hotelList = [{
      img: "../../images/hotel.jpg",
      name: "旅馆"
    },
    {
      img: "../../images/hotel.jpg",
      name: "旅馆"
    },
    {
      img: "../../images/hotel.jpg",
      name: "旅馆"
    },
    {
      img: "../../images/hotel.jpg",
      name: "旅馆"
    }
  ];
  this.setData({list: hotelList})
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