// pages/quick_start/quick_start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    telenumber:"",
    address_name:"",
    address:""
  },
  bindNameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindNumInput(e) {
    this.setData({
      telenumber: e.detail.value
    })
  },
  confirmClick(e){
    console.log(this.data)
  },
  locationTab(e) {
    var that = this
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          address_name: res.name,
          address: res.address,
        })
      },
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