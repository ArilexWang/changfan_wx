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
        icon: "../../res/mobile.png",
        name: "手机维修",
      },
      {
        icon: "../../res/pad.png",
        name: "平板维修",
      },
      {
        icon: "../../res/repay.png",
        name: "回收服务",
      },
      {
        icon: "../../res/locate.png",
        name: "分店地址",
      },
    ],

    issues: [
      {
        icon:"../../res/screen.png",
        name:"屏幕"
      },
      {
        icon: "../../res/button.png",
        name: "按键"
      },
      {
        icon: "../../res/housing.png",
        name: "外壳/边框"
      },
      {
        icon: "../../res/voice.png",
        name: "声音"
      },
      {
        icon: "../../res/camera.png",
        name: "摄像与拍照"
      },
      {
        icon: "../../res/battery.png",
        name: "电池或不开机"
      },
      {
        icon: "../../res/else.png",
        name: "其他"
      },
      {
        icon: "../../res/ram.png",
        name: "内存升级"
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