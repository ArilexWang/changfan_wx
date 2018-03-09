// pages/brand/brand.js
var api = require("../../api/api.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    issues: [
      {
        icon: "http://p3pu3eqqb.bkt.clouddn.com/iphone3.png",
        name: "苹果"
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
  },
  toDetail: function (e) {
    wx.navigateTo({
      url: '../model/model?id=' + e.currentTarget.id,
    })
  },
  getBrandSuccess(res) {
    console.log(res.data)
    var _issues = []
    for (var item in res.data) {
      var tempbrand = {}
      console.log(res.data[item])
      var temp = res.data[item]
      tempbrand.brandID = temp.pk
      tempbrand.name = temp.fields._name
      tempbrand.icon = temp.fields._thumbnail
      tempbrand.description = temp.fields._description
      _issues.push(tempbrand)
    }
    // console.log(_issues)
    this.setData({
      issues: _issues
    })
  },
  getResponseFailed(res) {
    console.log(res)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.getAllBrands(this.getBrandSuccess, this.getResponseFailed)
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