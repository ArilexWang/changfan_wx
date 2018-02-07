// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    issues: [
      {
        id:'',
        icon: "../../res/screen.png",
        name: "屏幕",
        content:'屏幕碎裂，屏幕不亮，触控失灵等'
      },
      {
        id: '',
        icon: "../../res/button.png",
        name: "按键",
        content: '屏幕碎裂，屏幕不亮，触控失灵等'
      },
      {
        id: '',
        icon: "../../res/housing.png",
        name: "外壳/边框",
        content: '屏幕碎裂，屏幕不亮，触控失灵等'
      },
      {
        id: '',
        icon: "../../res/voice.png",
        name: "声音",
        content: '屏幕碎裂，屏幕不亮，触控失灵等'
      },
      {
        id: '',
        icon: "../../res/camera.png",
        name: "摄像与拍照",
        content: '屏幕碎裂，屏幕不亮，触控失灵等'
      },
      {
        icon: "../../res/battery.png",
        name: "电池或不开机",
        content: '屏幕碎裂，屏幕不亮，触控失灵等'
      },
      {
        id: '',
        icon: "../../res/else.png",
        name: "其他",
        content: '屏幕碎裂，屏幕不亮，触控失灵等'
      },
      {
        id: '',
        icon: "../../res/ram.png",
        name: "内存升级",
        content: '屏幕碎裂，屏幕不亮，触控失灵等'
      },
    ],
  },
  toDetail: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../detail/detail',
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