const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      placeholder: "杭州栖息地",
      selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
      selectData: ['15:10','15:15','15:20'],//下拉列表的数据
      index: 0,//选择的下拉列表下标
      navbar: ['民宿'],
      currentTab: 0,
      showModalStatus: false,
      button: 0,
      cityTag: "城市",
      destinationTag: "目的",
      sequenceTag: "综合排序",
      startDate: "05/24入住",
      endDate: "06/02离开",
      cityList: [{name: "杭州", select: 0},
                 {name: "北京", select: 1},
                 {name: "上海", select: 2},
                 {name: "大理", select: 3},
                 {name: "三亚", select: 4},
                 {name: "苏州", select: 5},
                 {name: "成都", select: 6},
                 {name: "宁波", select: 7},
                 {name: "广州", select: 8},
                 {name: "重庆", select: 9}],
      destinationItems: [
        {value: '0', name: '住宿'},
        {value: '1', name: '烧烤', checked: 'true'},
        {value: '2', name: '采茶'},
        {value: '3', name: '门票'},
        {value: '4', name: '婚纱'},
        {value: '5', name: '轰趴'},
        {value: '6', name: '野营'}
      ],
      sequenceItems: [
        {value: '0', name: '综合排序'},
        {value: '1', name: '好评优先', checked: 'true'},
        {value: '2', name: '价格从低到高'},
        {value: '3', name: '价格从高到低'},
        {value: '4', name: '距离从近到远'},
      ],
      cityIndex: 0,
    },

    formSubmit: function (e) {
      // console.log(e.detail.value.sequence)
      this.setData({sequenceTag: e.detail.value.sequence})
    },

    cityChoose: function (e) {
      if (this.data.cityIndex != e.currentTarget.id){
      this.data.cityIndex = e.currentTarget.id
      }
      else{this.data.cityIndex = 100}
      this.setData({cityIndex: this.data.cityIndex})
    },

    selectTap() {
      this.setData({
        selectShow: !this.data.selectShow
      });
    },

    setCity: function (e) {
      this.setData({button: 0})
      var currentStatu = e.currentTarget.dataset.statu;
      if ( currentStatu == "close" ){
        this.data.cityTag = this.data.cityList[this.data.cityIndex].name
        this.setData({cityTag: this.data.cityTag})
      }
      this.util(currentStatu)
    },

    setDestination: function (e) {
      this.setData({button: 1})
      var currentStatu = e.currentTarget.dataset.statu;
      this.util(currentStatu)
    },

    setSequence: function (e) {
      this.setData({button: 2})
      var currentStatu = e.currentTarget.dataset.statu;
      this.util(currentStatu)
    },

    util: function(currentStatu){
      /* 动画部分 */
      // 第1步：创建动画实例 
      var animation = wx.createAnimation({
        duration: 200,  //动画时长
        timingFunction: "linear", //线性
        delay: 0  //0则不延迟
      });
      
      // 第2步：这个动画实例赋给当前的动画实例
      this.animation = animation;
   
      // 第3步：执行第一组动画
      animation.opacity(0).rotateX(-100).step();
   
      // 第4步：导出动画对象赋给数据对象储存
      this.setData({
        animationData: animation.export()
      })
      
      // 第5步：设置定时器到指定时候后，执行第二组动画
      setTimeout(function () {
        // 执行第二组动画
        animation.opacity(1).rotateX(0).step();
        // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
        this.setData({
          animationData: animation
        })
        
        //关闭
        if (currentStatu == "close") {
          this.setData(
            {
              showModalStatus: false
            }
          );
        }
      }.bind(this), 200)
    
      // 显示
      if (currentStatu == "open") {
        this.setData(
          {
            showModalStatus: true
          }
        );
      }
    },

    optionTap(e) {
      let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      this.setData({
        index: Index,
        selectShow: !this.data.selectShow
      });
    },
  
  navbarTap: function(e){
      this.setData({
        currentTab: e.currentTarget.dataset.idx
      })
    },

  houseDetails: function(e){
    let businessCode = this.data.houseList[e.currentTarget.id].businessCode
    wx.navigateTo({
      url: `../../pages/house_detail/house_detail?business_code=${businessCode}`,
    })
  },

  like: function (e) {
    var that = this
        if (that.data.houseList[e.currentTarget.id].liked == false){
          that.data.houseList[e.currentTarget.id].liked = true
          that.data.houseList[e.currentTarget.id].save = "../../images/icons/like_purple.png"
          that.setData({houseList: that.data.houseList})
          wx.request({
            url: `${app.globalData.GLOBAL_URL}/keep_house/keep?open_id=${that.data.openId}&business_code=${that.data.houseList[e.currentTarget.id].businessCode}`,
            method: "POST",
            success: (res)=>{
              // console.log("收藏成功")
            }
          })
        }
        else{
          that.data.houseList[e.currentTarget.id].liked = false
          that.data.houseList[e.currentTarget.id].save = "../../images/icons/like_white.png"
          that.setData({houseList: that.data.houseList})
          wx.request({
            url: `${app.globalData.GLOBAL_URL}/keep_house/unlike?open_id=${that.data.openId}&business_code=${that.data.houseList[e.currentTarget.id].businessCode}`,
            method: "PUT",
            success: (res)=>{
              // console.log("解除收藏")
            }
          })
        }
  },

  calendar: function() {
    wx.navigateTo({
      url: '../../pages/calendar/calendar'
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
    var openId = wx.getStorageSync('jwtData').open_id
    this.setData({openId: openId})
    var that = this
    var startMonth = options.startMonth
    var startDate = options.startDate
    var endMonth = options.endMonth
    var endDate = options.endDate
    var startText = `${startMonth}/${startDate}入住`
    var endText = `${endMonth}/${endDate}离开`
    this.setData({startMonth: startMonth, startDate: startDate, endMonth: endMonth, endDate: endDate})
    wx.request({
      url: `${app.globalData.GLOBAL_URL}/house/set`,
      success: (res)=>{
        var houseList = res.data.map(function(obj){
          var rObj = {}
          var businessCode = obj.businessCode
          rObj["businessCode"] = obj.businessCode
          rObj["img"] = app.globalData.GLOBAL_URL + obj.mainPath
          rObj["headImg"] = app.globalData.GLOBAL_URL + obj.headImgPath
          rObj["city"] = obj.city
          rObj["houseName"] = obj.houseName
          rObj["style"] = obj.style
          var [tag1, tag2, tag3] = obj.tags.split("|")
          rObj["tag1"] = tag1
          rObj["tag2"] = tag2
          rObj["tag3"] = tag3
          rObj["price"] = obj.bottomPrice
          wx.request({
            url: `${app.globalData.GLOBAL_URL}/keep_house/like_or_not?open_id=${openId}&business_code=${businessCode}`,
            success: (res)=>{
              if (res.data.length == 0){
                rObj["liked"] = false
                rObj["save"] = "../../images/icons/like_grey.png"
              }
              else{
                rObj["liked"] = true
                rObj["save"] = "../../images/icons/like_purple.png"
              }
            }
          })
          return rObj
        })
        that.setData({houseList: houseList})
        // for (var i = 0; i < res.data.length; i++){
        //   var houseItem = {}
        //   houseItem["businessCode"] = res.data[i].businessCode
        //   houseItem["img"] = domain + res.data[i].mainPath
        //   houseItem["save"] = "../../images/icons/like_grey.png"
        //   houseItem["headImg"] = domain + res.data[i].headImgPath
        //   houseItem["city"] = res.data[i].city
        //   houseItem["houseName"] = res.data[i].houseName
        //   houseItem["style"] = res.data[i].style
        //   var tags = res.data[i].tags.split("|")
        //   var [tag1, tag2, tag3] = tags
        //   houseItem["tag1"] = tag1
        //   houseItem["tag2"] = tag2
        //   houseItem["tag3"] = tag3
        //   houseItem["price"] = res.data[i].bottomPrice
        //   wx.request({
        //     url: `${domain}/keep_house/like_or_not?open_id=${openId}&business_code=${res.data[i].businessCode}`,
        //     success: (res)=>{
        //       if (res.data.length == 0){
        //         houseItem["liked"] = false
        //         houseItem["save"] = "../../images/icons/like_grey.png"
        //         houseList.push(houseItem)
        //         that.setData({houseList: houseList})
        //       }
        //       else{
        //         houseItem["liked"] = true
        //         houseItem["save"] = "../../images/icons/like_purple.png"
        //         houseList.push(houseItem)
        //         that.setData({houseList: houseList})
        //       }
        //     },
        //   })
        // }
      },
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