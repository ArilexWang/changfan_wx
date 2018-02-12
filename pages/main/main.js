// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    indicatorColor: 'lightwhite',
    indicatorActiveColor: '#d3d3d3',
    autoplay: true,
    interval: 5000,
    duration: 1000,
    banners: [
      "http://p3pu3eqqb.bkt.clouddn.com/1.png",
      "http://p3pu3eqqb.bkt.clouddn.com/2.png"
    ],
    services: [
      {
        id:'',
        icon: "../../res/mobile.png",
        name: "手机维修",
      },
      {
        id: '',
        icon: "../../res/pad.png",
        name: "平板维修",
      },
      {
        id: '',
        icon: "../../res/repay.png",
        name: "回收服务",
      },
      {
        id: '',
        icon: "../../res/locate.png",
        name: "分店地址",
      },
    ],

    issues: [
      {
        icon:"http://p3pu3eqqb.bkt.clouddn.com/iphone3.png",
        name:"苹果"
      },
      {
        icon: "http://p3pu3eqqb.bkt.clouddn.com/iphone3.png",
        name: "华为"
      },
      {
        icon: "http://p3pu3eqqb.bkt.clouddn.com/iphone3.png",
        name: "OPPO"
      },
      {
        icon: "http://p3pu3eqqb.bkt.clouddn.com/iphone3.png",
        name: "小米"
      },
      {
        icon: "http://p3pu3eqqb.bkt.clouddn.com/iphone3.png",
        name: "三星"
      },
      {
        icon: "http://p3pu3eqqb.bkt.clouddn.com/iphone3.png",
        name: "魅族"
      },
      
    ],

    popular: [
      {
        type: 'iPhone6',
        problem: '外屏碎（显示正常）',
        price: 199
      },
      {
        type: 'iPhone6',
        problem: '外屏碎（显示正常）',
        price: 199
      },
      {
        type: 'iPhone6',
        problem: '外屏碎（显示正常）',
        price: 199
      },

    ],

    strengths: [
      {
        icon:'../../res/fix.png',
        name:'Hi维修保障',
      },
      {
        icon: '../../res/speed.png',
        name: '极速优质服务',
      },
      {
        icon: '../../res/price.png',
        name: '价格公开透明',
      }
    ]


  },

  toDetail:function(e){
    wx.navigateTo({
      url: '../model/model',
    })
  },
  serviceClick:function(e){
    wx.navigateTo({
      url: '../classify/classify',
    })
  },
  recycleClick:function(e){
    wx.switchTab({
      url: '../recycle/recycle',
    })
  },
  locateClick:function(e){
    wx.navigateTo({
      url: '../branch/branch',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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