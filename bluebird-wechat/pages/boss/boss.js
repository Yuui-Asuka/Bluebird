const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bossName : "",
    entryTime:"",
    introduce: "",
    ellipsis: true,
    unfold: true,
    ellipsis2: true,
    unfold2: true
  },

  ellipsis: function () {  
    var value = !this.data.ellipsis;
    var unfold = !this.data.unfold;
    this.setData({
      ellipsis: value,
      unfold: unfold
    })
  },

  ellipsis2: function () {  
    var value2 = !this.data.ellipsis2;
    var unfold2 = !this.data.unfold2;
    this.setData({
      ellipsis2: value2,
      unfold2: unfold2
    })
  },

  getSelectItem:function(e){
    var that = this;
    var itemWidth = e.detail.scrollWidth / that.data.proList.length;//每个商品的宽度
    console.log("图片宽度"+itemWidth)
    var scrollLeft = e.detail.scrollLeft;//滚动宽度
    console.log("滚动宽度"+scrollLeft)
    var curIndex = Math.ceil((scrollLeft - (itemWidth/4))/itemWidth)

    //var curIndex = Math.round(scrollLeft / itemWidth);//通过Math.round方法对滚动大于一半的位置进行进位
    console.log("目前下标"+curIndex)
    for (var i = 0, len = that.data.proList.length; i < len; ++i) {
        that.data.proList[i].selected = false;
    }
    that.data.proList[curIndex].selected = true;
    that.setData({
        proList: that.data.proList,
       // giftNo: this.data.proList[curIndex].id
    });
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
    var businessCode = options.business_code
    wx.request({
      url: `${app.globalData.GLOBAL_URL}/house/details?business_code=${businessCode}`,
      success:(res)=>{
        var bossName = res.data.businessName
        var entryDate = new Date(res.data.entryTime)
        var year = entryDate.getFullYear()
        var month = entryDate.getMonth() + 1
        var entry = year + "年" + month + "月"
        var introduce = res.data.houseIntroduce
        var headImg = `${app.globalData.GLOBAL_URL}${res.data.headImgPath}`
        this.setData({bossName: bossName, entryTime: entry, introduce: introduce, headImg: headImg})
        wx.request({
          url: `${app.globalData.GLOBAL_URL}/picture/scenic_path?business_code=${businessCode}`,
          success: (res)=>{
            var scenicList = res.data.map(
              function (obj){
                return {"proUrl" : app.globalData.GLOBAL_URL + obj}
              }
            )
            var pictureWidth = 219.2;
            var scrollLeft = pictureWidth * scenicList.length / 2.96
            that.setData({scrollLeft: scrollLeft, proList: scenicList})
          }
        })
      }
    })

    // var bossName = "某某某"
    // var myDate = new Date();
    // var year = myDate.getFullYear();
    // var month = myDate.getMonth();
    // var entry = year+"年"+month+"月"
    // var introduce = "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述"
    
    // var scenicList = [
    //   {proUrl: "../../images/001.jpg"},
    //   {proUrl: "../../images/002.jpg"},
    //   {proUrl: "../../images/003.jpg"},
    //   {proUrl: "../../images/004.jpg"},
    //   {proUrl: "../../images/005.jpg"},
    // ];
    
    

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