// pages/contact/contact.js

const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    address_name: "",
    address: "",
    name: "",
    sex: true,
    telenumber: ""
  
  },
  locationTab(e){
    var that = this
    wx.chooseLocation({
      success: function(res) {
        console.log(res)
        that.setData({
          address_name: res.name,
          address: res.address,
        })
      },
    })
  },
  sexTab(e){
    let _sex = e.currentTarget.dataset.sex
    if(_sex === '1'){
      this.setData({
        sex: true
      })
    } else{
      this.setData({
        sex:false
      })
    }
  },
  bindNameInput(e){
    this.setData({
      name: e.detail.value
    })
  },
  bindNumInput(e){
    this.setData({
      telenumber: e.detail.value
    })
  },
  confirmClick(e){
    console.log(this.data)
    
    var contact = {}
    contact.name = this.data.name
    contact.address_name = this.data.address_name
    contact.address = this.data.address
    contact.telenumber = this.data.telenumber
    contact.sex = this.data.sex
    app.globalData.contact = contact
    console.log(app.globalData)
    
    wx.navigateBack({
      delta:1
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