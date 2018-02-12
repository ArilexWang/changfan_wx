// pages/detail/detail.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    issue: {
      image: "http://p3pu3eqqb.bkt.clouddn.com/wx3.png",
      content: "屏幕碎裂、屏幕不亮、触控失灵等"
    },
    services: ["免费上门", "20分钟快修", "修完后付款"],
    type: "",
    solutions: [
      {
        id: '',
        content: '外屏碎（显示正常）',
        price: 320.00,
        plan: '更换总成对换（质保：80天）（旧屏回收）',
        time: '40分',
        explain: '此服务产品使用非原装配件，使用非原装配件将不再享受厂家提供的保修服务',

      },
      {
        id: '',
        content: '内屏碎',
        price: 620.00,
        plan: '更换总成对换（质保：80天）（旧屏回收）',
        time: '40分',
        explain: '此服务产品使用非原装配件，使用非原装配件将不再享受厂家提供的保修服务',

      }
    ],
    animationData: "",
    showModalStatus: false,
    max_price: "",
    min_price: "",
    price: "",
    count: false,
    isChosen: false,
    chosen_solution_index: -1,
  },

  getMaxPrice: function () {
    var _solutions = this.data.solutions
    var max = _solutions[0].price
    for (var i = 0; i < _solutions.length; i++) {
      if (max < _solutions[i].price) max = _solutions[i].price
    }
    return max
  },
  getMinPrice: function () {
    var _solutions = this.data.solutions
    var min = _solutions[0].price

    for (var i = 0; i < _solutions.length; i++) {
      if (min >= _solutions[i].price) min = _solutions[i].price

    }

    return min
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

  solutionClick: function (e) {
    const idx = parseInt(e.currentTarget.id)
    const _solutions = this.data.solutions
    var _chosen = false
    var _price = 0
    if(!this.data.isChosen){
      _solutions[idx].chosen = true
      this.isChosen = true
      _price = _solutions[idx].price
    } else{
      for (var i = 0; i < _solutions.length; i++) {
        _solutions[i].chosen = false;
      }
      _solutions[idx].chosen = true;
      _price = _solutions[idx].price
    }


    this.setData({
      solutions: _solutions,
      isChosen: this.isChosen,
      chosen_solution_index: idx,
      price: _price,
      count: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  init: function () {
    var _max = this.getMaxPrice()
    var _min = this.getMinPrice()
    var _price = this.data.solutions[0].price

    if (this.data.solutions.length > 1) {
      this.setData({
        count: true,
        max_price: _max,
        min_price: _min
      })
    } else {
      this.setData({
        count: false,
        price: _price
      })
    }

    this.setData({
      type: app.globalData.model
    })
  },
  nextClick: function(e){
    if(this.isChosen){
      wx.navigateTo({
        url: '../order/order',
      })
    } else{
      wx.showToast({
        title: '请选择服务项目',
        icon:'none'
      })
    }
    
  },

  onLoad: function (options) {
    this.init()
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