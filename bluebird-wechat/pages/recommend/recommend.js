const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['民宿', '活动', '社区'],
    currentTab: 0,
    scrollLeft: 150,
    proList:[],
    activityList: [{address: "舟山", url: "../../images/activities/camp.jpg", name: "露营"},
    {address: "丽江", url: "../../images/activities/mountainClimbing.jpg", name: "登山"},
    {address: "阿拉善盟", url: "../../images/activities/cross.jpg", name: "沙漠越野"},
    {address: "厦门", url: "../../images/activities/dive.jpg", name: "潜水"},
    {address: "呼伦贝尔", url: "../../images/activities/ride.jpg", name: "骑马"},
    {address: "长白山", url: "../../images/activities/ski.jpg", name: "滑雪"},
    {address: "杭州", url: "../../images/activities/teaPlucking.jpg", name: "采茶"},
  ],
    houseList:[],
    nearList:[],
    nearList: [
      {activityUrl: "../../images/001.jpg", location: "杭州栖息地",name: "采茶", time: "周四 · 2020年4月20日 · 15 : 30 - 18 : 30", describe: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述"},
        {activityUrl: "../../images/001.jpg", location: "杭州栖息地",name: "采茶", time: "周四 · 2020年4月20日 · 15 : 30 - 18 : 30",
        describe: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述"},
        {activityUrl: "../../images/001.jpg", location: "杭州栖息地",name: "采茶", time: "周四 · 2020年4月20日 · 15 : 30 - 18 : 30",
        describe: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述"},
        {activityUrl: "../../images/001.jpg", location: "杭州栖息地",name: "采茶", time: "周四 · 2020年4月20日 · 15 : 30 - 18 : 30",
        describe: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述"},
        {activityUrl: "../../images/001.jpg", location: "杭州栖息地",name: "采茶", time: "周四 · 2020年4月20日 · 15 : 30 - 18 : 30",
        describe: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述"}
    ],

    hotList: [
      {hotUrl: "../../images/001.jpg", location: "杭州栖息地", name: "采茶", describe: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述", price: "150", signUp: "17"},
      {hotUrl: "../../images/001.jpg", location: "杭州栖息地", name: "采茶", describe: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述", price: "150", signUp: "17"},
      {hotUrl: "../../images/001.jpg", location: "杭州栖息地", name: "采茶", describe: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述", price: "150", signUp: "17"},
      {hotUrl: "../../images/001.jpg", location: "杭州栖息地", name: "采茶", describe: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述", price: "150", signUp: "17"},
      {hotUrl: "../../images/001.jpg", location: "杭州栖息地", name: "采茶", describe: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述", price: "150", signUp: "17"},
    ]
  },

  

  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  getSelectItem:function(e){
    var that = this;
    var itemWidth = e.detail.scrollWidth / that.data.activityList.length;//每个商品的宽度
    //console.log("图片宽度"+itemWidth)
    var scrollLeft = e.detail.scrollLeft;//滚动宽度
    //console.log("滚动宽度"+scrollLeft)
    var curIndex = Math.ceil((scrollLeft - (itemWidth/4))/itemWidth)

    //var curIndex = Math.round(scrollLeft / itemWidth);//通过Math.round方法对滚动大于一半的位置进行进位
    //console.log("目前下标"+curIndex)
    for (var i = 0, len = that.data.activityList.length; i < len; ++i) {
        that.data.activityList[i].selected = false;
    }
    that.data.activityList[curIndex].selected = true;
    that.setData({
        activityList: that.data.activityList,
       // giftNo: this.data.proList[curIndex].id
    });
},


//   getSelectItem:function(e){
//     var that = this;
//     var itemWidth = e.detail.scrollWidth / that.data.proList.length;//每张图片宽度
//     var scrollLeft = e.detail.scrollLeft;//滚动宽度
//     var curIndex = Math.ceil((scrollLeft - (itemWidth/4))/itemWidth)

//     //var curIndex = Math.round(scrollLeft / itemWidth);//通过Math.round方法对滚动大于一半的位置进行进位
//     console.log("目前下标"+curIndex)
//     for (var i = 0, len = that.data.proList.length; i < len; ++i) {
//         that.data.proList[i].selected = false;
//     }
//     that.data.proList[curIndex].selected = true;
//     that.setData({
//         proList: that.data.proList,
//        // giftNo: this.data.proList[curIndex].id
//     });
// },

  selectProItem: function (e){
    var code = e.currentTarget.id
    if (code != ""){
    wx.navigateTo({
      url: `../../pages/house_detail/house_detail?business_code=${code}`,
    })
  }
  },

  houseDetail: function (e) {
    if ( wx.getStorageSync('jwtData') == null){
      wx.reLaunch({
        url: "../../pages/before_login/before_login",
      })
    }
    var code = e.currentTarget.id
    if (code != ""){
    wx.navigateTo({
      url: `../../pages/house_detail/house_detail?business_code=${code}`,
    })
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

    var that = this
    wx.request({
      url: `${app.globalData.GLOBAL_URL}/house/set`,
      success: (res) => {
        var scenicList = res.data.map(function(obj){
          let rObj = {}
          rObj["proUrl"] = app.globalData.GLOBAL_URL + obj.mainPath
          rObj["city"] = obj.city
          rObj["scenic"] = obj.scenicSpotsName
          rObj["name"] = obj.houseName
          rObj["introduce"] = obj.style
          rObj["businessCode"] = obj.businessCode
          return rObj
        })
        var houseList = res.data.map(function(obj){
          let rObj = {}
          rObj["houseUrl"] = app.globalData.GLOBAL_URL + obj.mainPath
          rObj["name"] = obj.houseName
          rObj["address"] = obj.city
          rObj["introduce"] = obj.style
          let [tag1, tag2, tag3] = obj.tags.split("|")
          rObj["tag1"] = tag1
          rObj["tag2"] = tag2
          rObj["price"] = obj.bottomPrice
          rObj["businessCode"] = obj.businessCode
          return rObj
      })
      scenicList.unshift({proUrl:"../../images/others/banner1.jpg"})
      that.setData({proList: scenicList, houseList: houseList})
    }
    })

    // var pictureWidth = 219.2;
    // var scrollLeft = pictureWidth * scenicList.length / 2.96
    // this.setData({scrollLeft: scrollLeft})
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({scrollLeft: 150})
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
    console.log("下拉刷新")
    this.onLoad();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // var houseList = res.data.map(function(obj){
    //   let rObj = {}
    //   rObj["houseUrl"] = app.globalData.GLOBAL_URL + obj.mainPath
    //   rObj["name"] = obj.houseName
    //   rObj["address"] = obj.city
    //   rObj["introduce"] = obj.style
    //   let [tag1, tag2, tag3] = obj.tags.split("|")
    //   rObj["tag1"] = tag1
    //   rObj["tag2"] = tag2
    //   rObj["price"] = obj.bottomPrice
    //   rObj["businessCode"] = obj.businessCode
    //   return rObj
    var domain = app.globalData.GLOBAL_URL
    var concatList = [{houseUrl: `${domain}/tempImage/丽水松阳茶文化.jpg`, name:"松阳茶文化", address:"丽水市", tag1: "传统", tag2: "古风", price: "257"},
    {houseUrl: `${domain}/tempImage/乌镇西栅.jpg`, name:"西栅", address:"嘉兴市", tag1: "临水", tag2: "古风", price: "288"},
    {houseUrl: `${domain}/tempImage/北京隐山小筑.jpg`, name:"隐山小筑", address:"北京市", tag1: "靠山", tag2: "时尚", price: "340"},
    {houseUrl: `${domain}/tempImage/垦丁爱情海.jpg`, name:"爱情海", address:"屏东县", tag1: "传统", tag2: "古风", price: "399"},
    {houseUrl: `${domain}/tempImage/大邑紫云香榭.jpg`, name:"紫云香榭", address:"成都市", tag1: "浪漫", tag2: "古典", price: "180"},
    {houseUrl: `${domain}/tempImage/宁波莞舍.jpg`, name:"莞舍", address:"宁波市", tag1: "传统", tag2: "休闲", price: "210"},
    {houseUrl: `${domain}/tempImage/安吉四季慢谷.jpg`, name:"四季慢谷", address:"湖州市", tag1: "传统", tag2: "古风", price: "180"},
    {houseUrl: `${domain}/tempImage/宜兰县蜜糖民宿.jpg`, name:"蜜糖", address:"宜兰县", tag1: "时尚", tag2: "海边", price: "388"},
    {houseUrl: `${domain}/tempImage/新竹.jpg`, name:"香榭雅舍", address:"新竹市", tag1: "时尚", tag2: "欧美", price: "405"},
    {houseUrl: `${domain}/tempImage/无锡天空城.jpg`, name:"天空城", address:"无锡市", tag1: "梦幻", tag2: "古典", price: "250"},
    {houseUrl: `${domain}/tempImage/杭州珑璟心.jpg`, name:"珑璟心", address:"杭州市", tag1: "豪华", tag2: "休闲", price: "290"},
    {houseUrl: `${domain}/tempImage/杭州红枫山居.jpg`, name:"红枫山居", address:"杭州市", tag1: "靠山", tag2: "宁静", price: "150"},
    {houseUrl: `${domain}/tempImage/杭州越上云舍.jpg`, name:"越上云舍", address:"杭州市", tag1: "欧美", tag2: "时尚", price: "240"},
    {houseUrl: `${domain}/tempImage/松阳县茶隐.jpg`, name:"茶隐", address:"松阳县", tag1: "传统", tag2: "古风", price: "80"},
    {houseUrl: `${domain}/tempImage/泰安梨园.jpg`, name:"梨园", address:"泰安市", tag1: "传统", tag2: "古风", price: "100"},
    {houseUrl: `${domain}/tempImage/深圳金水湾.jpg`, name:"金水湾", address:"深圳市", tag1: "传统", tag2: "休闲", price: "180"},
    {houseUrl: `${domain}/tempImage/温州海天左舍.jpg`, name:"海天左舍", address:"温州市", tag1: "高雅", tag2: "现代", price: "210"},
    {houseUrl: `${domain}/tempImage/滨州黄河古村.jpg`, name:"黄河古村", address:"滨州市", tag1: "传统", tag2: "民族", price: "130"},
    {houseUrl: `${domain}/tempImage/潮州木棉公馆.jpeg`, name:"木棉公馆", address:"潮州市", tag1: "休闲", tag2: "雅致", price: "199"},
    {houseUrl: `${domain}/tempImage/苏州右见留白.jpg`, name:"右见留白", address:"苏州市", tag1: "豪华", tag2: "雅致", price: "340"},
    {houseUrl: `${domain}/tempImage/莫干山乐溪竹坞.jpg`, name:"乐溪竹坞", address:"杭州市", tag1: "靠山", tag2: "休闲", price: "160"},
    {houseUrl: `${domain}/tempImage/莫干山山水居.jpg`, name:"山水居", address:"杭州市", tag1: "靠山", tag2: "休闲", price: "140"},
    {houseUrl: `${domain}/tempImage/莫干山蕨宿.jpg`, name:"蕨宿", address:"杭州市", tag1: "靠山", tag2: "休闲", price: "88"},
    {houseUrl: `${domain}/tempImage/莫干山隐西.jpg`, name:"隐西", address:"杭州市", tag1: "靠山", tag2: "休闲", price: "136"},
    {houseUrl: `${domain}/tempImage/莫干山雅筑.jpg`, name:"雅筑", address:"杭州市", tag1: "靠山", tag2: "休闲", price: "120"},
    {houseUrl: `${domain}/tempImage/郑州白心.jpg`, name:"白心", address:"郑州市", tag1: "童话", tag2: "休闲", price: "188"},
    {houseUrl: `${domain}/tempImage/重庆寻光.jpg`, name:"寻光", address:"重庆市", tag1: "高雅", tag2: "时尚", price: "225"},
    {houseUrl: `${domain}/tempImage/青岛海岛民宿.jpg`, name:"海岛民宿", address:"青岛市", tag1: "海边", tag2: "度假", price: "338"}]
    var newList = this.data.houseList.concat(concatList)
    this.setData({houseList: newList})
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})