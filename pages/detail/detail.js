// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    issue:{
      image:"http://p3pu3eqqb.bkt.clouddn.com/wx3.png",
      content:"屏幕碎裂、屏幕不亮、触控失灵等"
    },
    services:["免费上门","20分钟快修","修完后付款"],
    type:"iPhone7",
    solutions:[
      {
        id:'',
        content: '外屏碎（显示正常）',
        price: 320
      },
      {
        id: '',
        content: '内屏碎',
        price: 620
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