const app = getApp()
Page({
  data: {
    latitude: 0,
    longitude: 0,
  },

  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.detail.markerId)
  },
  controltap(e) {
    console.log(e.detail.controlId)
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '猫印民宿酷',
    })
    wx.setNavigationBarColor({
      backgroundColor: '#000000',
      frontColor: '#ffffff',
    })
    var screenHeight = wx.getSystemInfoSync().screenHeight * 1.2
    this.setData({screenHeight: screenHeight})
    var url = `${app.globalData.GLOBAL_URL}/map/location_research?city=${options.city}&key_word=${options.key_word}`
    wx.request({
      url: url,
      success: (res)=>{
        var latitude = res.data.data[0].location.lat
        var longitude = res.data.data[0].location.lng
        var destinationMarker = [{
          id: 0,
          latitude: latitude,
          longitude: longitude,
          iconPath: "../../images/icons/map.png",
          alpha: 0.8,
          width: 25,
          height: 25
        }]
        this.setData({
                 latitude: latitude,
                 longitude: longitude,
                 marker: destinationMarker
               })
      }
    })
  //   wx.getLocation({
  //   type: 'wgs84',
  //   success: (res) => {
  //     console.log(res)
  //     let latitude = res.latitude
  //     let longitude = res.longitude
  //     this.setData({
  //       latitude: latitude,
  //       longitude: longitude
  //     })
  //   },
  //   fail: (res) => {
  //     console.log("调用位置失败")
  //   },
  //   complete: (res) =>{
  //     console.log("调用完成")
  //   }
  // })
},
  onShow: function (){
    var that = this
    // wx.startLocationUpdate({
    //   success: (res) => {
    //     console.log("开启定位成功", res)
    //   },
    //   fail: (res) => {
    //     console.log("开启定位失败", res)
    //   }
    // })
    // wx.onLocationChange(function(res) {
    //   console.log('location change', res)
    //   let markers = [{
    //     id: 0,
    //     latitude: res.latitude,
    //     longitude: res.longitude,
    //     width: 50,
    //     height: 50
    //   }]
    //   that.setData({markers: markers})
    // })
  }
})