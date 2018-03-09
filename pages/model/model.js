var api = require("../../api/api.js")
const app = getApp()
// pages/model/model.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    brand:{
      name:"iPhone",
      logo:"http://p3pu3eqqb.bkt.clouddn.com/logo.png"
    },
    models:[
    ],
    ids:[]
  },

  modelClick:function(e){
    console.log(e)
    var _model = e.currentTarget.dataset.name
    app.globalData.model = _model
    app.globalData.modelID = e.currentTarget.id
    if(app.globalData.category){
      wx.navigateTo({
        url: '../detail/detail?id=' + app.globalData.category,
      })
    } else{
      wx.navigateTo({
        url: '../classify/classify',
      })
    }
    
  },
  getModelSuccess(res){
    var _models = []
    var _ids = []
    console.log(res.data)
    for(var i in res.data){
      var temp = res.data[i]
      var tempModel = {}
      tempModel.name = temp.fields._name
      tempModel.modelID = temp.pk
      _models.push(tempModel)
    }
    this.setData({
      models: _models
    })
  },
  getBrandSuccess(res){
    console.log(res)
    var _brand = {}
    _brand.name = res.data[0].fields._name
    _brand.logo = res.data[0].fields._thumbnail
    this.setData({
      brand: _brand
    })
  },
  getResponseFailed(res){
    console.log(res)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    console.log(app)
    api.getElectronicsModelByBrand(options.id, this.getModelSuccess, this.getResponseFailed)
    api.getElectronicsBrandByID(options.id, this.getBrandSuccess, this.getResponseFailed)
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