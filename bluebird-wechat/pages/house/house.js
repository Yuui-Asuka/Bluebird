// pages/journey.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proList:"",
    title: "标题",
    introduce: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
    address: "地址地址地址地址",
    blankNum: "5",
    bossName:"某某某",
    price: "300",
    tag1: "标签1",
    tag2: "标签2",
    tag3: "标签3",
    stayMonth: 0,
    stayDay: 0,
    leaveMonth: 0,
    leaveDay: 0,
    sub: 0,
    ellipsis: true,
    unfold: true,
    navbar: ['民宿介绍', '民宿活动', '入住须知'],
    currentTab: 0,
    showModalStatus: false,
    typeList:["A型", "B型", "C型", "D型"],
    typeSelected: 0,
    activityList: ["烧烤","采茶","门票","游船"],
    activitySelected: 0,
    timeList: ["周四 · 2020年4月30日 · 15 : 30 - 18 : 30",
    "周五 · 2020年5月1日 · 15 : 30 - 18 : 30",
    "周六 · 2020年5月2日 · 15 : 30 - 18 : 30"],
    timeSelected: 0,
    totalPrice: 399,
    activityList: [],
  },

  clickType: function(e){
    console.log(e.currentTarget.dataset.idx)
    this.setData({
      typeSelected: e.currentTarget.dataset.idx
    })
  },

  clickActivity: function(e){
    console.log(e.currentTarget.dataset.idx)
    this.setData({
      activitySelected: e.currentTarget.dataset.idx
    })
  },

  clickTime: function(e){
    console.log(e.currentTarget.dataset.idx)
    this.setData({
      timeSelected: e.currentTarget.dataset.idx
    })
  },

  powerDrawer: function (e) {
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
 
    // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停
    animation.translateY(240).step();
 
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

  ellipsis: function () {  
    var value = !this.data.ellipsis;
    var unfold = !this.data.unfold;
    this.setData({
      ellipsis: value,
      unfold: unfold
    })
  },

  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

//   getSelectItem:function(e){
//     var that = this;
//     var itemWidth = e.detail.scrollWidth / that.data.proList.length;//每个商品的宽度
//     console.log("图片宽度"+itemWidth)
//     var scrollLeft = e.detail.scrollLeft;//滚动宽度
//     console.log("滚动宽度"+scrollLeft)
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


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var scenicList = [
      {proUrl: "../../images/001.jpg"},
      {proUrl: "../../images/002.jpg"},
      {proUrl: "../../images/003.jpg"},
      {proUrl: "../../images/004.jpg"},
      {proUrl: "../../images/005.jpg"},
    ];
    this.setData({proList: scenicList})
    
    var stayDate = new Date("2020-06-27")
    var stayMonth = stayDate.getMonth() + 1

    var stayDay = stayDate.getDate()
    var leaveDate = new Date("2020-07-08")
    console.log(leaveDate)
    var leaveMonth = leaveDate.getMonth() + 1
    var leaveDay = leaveDate.getDate()
    
    

    var sub = (leaveDate - stayDate)/1000/60/60/24
    this.setData({stayMonth: stayMonth,
                  stayDay: stayDay,
                  leaveMonth: leaveMonth,
                  leaveDay: leaveDay,
                  sub: sub})

    var activityList = [
      {activityUrl: "../../images/001.jpg", name: "采茶", describe: "采茶活动描述", price: 999},
      {activityUrl: "../../images/003.jpg", name: "烧烤", describe: "烧烤活动描述", price: 999},
      {activityUrl: "../../images/004.jpg", name: "早餐", describe: "早餐活动描述", price: 999},
      {activityUrl: "../../images/005.jpg", name: "狼人杀", describe: "狼人杀活动描述", price: 999},
    ];
    this.setData({activityList: activityList})
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