const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  //   loveList: [{
  //     city: "杭州市",
  //     houseName: "栖息地民宿",
  //     style: "靠山靠水清朗时光",
  //     price: 135,
  //     img: "../../images/005.jpg",
  //     like: "../../images/icons/like_white.png"
  //   },
  //   {
  //     city: "杭州市",
  //     houseName: "栖息地民宿",
  //     style: "靠山靠水清朗时光",
  //     price: 135,
  //     img: "../../images/005.jpg",
  //     like: "../../images/icons/like_white.png"
  //   },
  //   {
  //     city: "杭州市",
  //     houseName: "栖息地民宿",
  //     style: "靠山靠水清朗时光",
  //     price: 135,
  //     img: "../../images/005.jpg",
  //     like: "../../images/icons/like_white.png"
  //   },
  // ],
  },

  like: function (e) {
    if (this.data.loveList[e.currentTarget.id].like == "../../images/icons/like_white.png"){
    this.data.loveList[e.currentTarget.id].like = "../../images/icons/like_purple.png"
    this.setData({loveList: this.data.loveList})
    }
    else if (this.data.loveList[e.currentTarget.id].like == "../../images/icons/like_purple.png"){
      this.data.loveList[e.currentTarget.id].like = "../../images/icons/like_white.png"
      this.setData({loveList: this.data.loveList})
    }
  },

  houseDetail: function (e) {
    wx.navigateTo({
      url: '../../pages/house_detail/house_detail',
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
    var openId = wx.getStorageSync('jwtData').open_id
    
    wx.request({
      url: `${app.globalData.GLOBAL_URL}/keep_house/get_keep?open_id=${openId}`,
      success: (res)=>{
        var businessInfo = res.data.map(function(obj) { 
          var rObj = {};
          rObj["city"] = obj.city
          rObj["houseName"] = obj.houseName
          rObj["style"] = obj.style
          rObj["price"] = obj.bottomPrice
          rObj["img"] = app.globalData.GLOBAL_URL + obj.mainPath
          rObj["like"] = "../../images/icons/like_purple.png"
          return rObj;
       })
       that.setData({loveList: businessInfo})
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