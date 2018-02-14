// pages/order/order.js

var calculate = require("./calculate")
const app = getApp()
Page({
  data: {
    hasContact: false,
    contact:{
      name:"王振",
      sex:"先生",
      address:"上海市上海市嘉定区曹安公路4800号",
      tele_number:"17717231435"
    },
    model:{
      icon:"http://p3pu3eqqb.bkt.clouddn.com/iphone3.png",
      type:"iPhone7",
      problem:"外屏破碎",
      color:"亮黑色",
      price:"300"
    },
    fixType:"上门维修",
    fixTime:"立即服务",
    remark:'',
    showModalStatus: false,
    animationData: "",
    days:[],
    hours:[],
    seletedDay: 0,
    seletedHour: 0,
  },
  fixClick:function(e){
    var that = this;
    var _itemList = ['上门维修', '到店维修']
    wx.showActionSheet({
      itemList: ['上门维修', '到店维修'],
      success: function (res) {
        
        that.setData({
          fixType: _itemList[res.tapIndex]
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  showModal: function (e) {
    console.log(e)
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 100,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(100).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 100)
  },
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false,
      })
    }.bind(this), 200)
  },
  handleMove1:function(e){
    console.log(e)
  },

  calculateDays(){
    var days = calculate.calculateDays()
    days[0].chosen = true
    this.setData({
      days
    })
    
  },
  calculateHours(){
    var hours = calculate.calculateHours()
    this.setData({
      hours
    })
  },
  tapDay(e){
    var idx = e.currentTarget.dataset.idx
    var _days = this.data.days
    for(var i = 0;i<7;i++){
      _days[i].chosen = false
    }
    _days[idx].chosen = true
    this.setData({
      days: _days,
      seletedDay: idx
    })
  },
  tapHour(e){
    var idx = e.currentTarget.dataset.idx
    this.data.seletedHour = idx
    let _seletedDay = this.data.seletedDay
    let _seletedHour = this.data.seletedHour
    var _fixTime = this.data.days[_seletedDay].day + this.data.hours[_seletedDay][_seletedHour]
    console.log(_fixTime)
    this.setData({
      fixTime: _fixTime,
      showModalStatus: false
    })
  },
  elseTab(e){
    wx.navigateTo({
      url: '../contact/contact',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.calculateDays()
    this.calculateHours()
    var _contact = app.globalData.contact
    if (_contact){
      if(_contact.sex === true){
        _contact.sex = "男士"
      } else {
        _contact.sex = "女士"
      }
      this.setData({
        hasContact: true,
        contact: _contact
      })
    }
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
    console.log(app.globalData)
    var _contact = app.globalData.contact
    if (_contact) {
      if (_contact.sex === true) {
        _contact.sex = "男士"
      } else {
        _contact.sex = "女士"
      }
      this.setData({
        hasContact: true,
        contact: _contact
      })
    }
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