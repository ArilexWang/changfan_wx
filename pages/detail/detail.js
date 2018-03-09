// pages/detail/detail.js
var api = require("../../api/api.js")
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
    if (!this.data.isChosen) {
      _solutions[idx].chosen = true
      this.isChosen = true
      _price = _solutions[idx].price
    } else {
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
    if (this.data.solutions.length > 0) {
      var _max = this.getMaxPrice()
      var _min = this.getMinPrice()
      var _price = this.data.solutions[0].price
    }
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
  nextClick: function (e) {
    
    
    if (this.isChosen) {
      console.log(this.data.chosen_solution_index)
      var index = this.data.chosen_solution_index
      console.log(this.data.solutions[index])
      var detailID = this.data.solutions[index].detailID
      wx.navigateTo({
        url: '../order/order?id=' + detailID,
      })
    } else {
      wx.showToast({
        title: '请选择服务项目',
        icon: 'none'
      })
    }

  },
  getDetailSucess(res) {
    console.log(res.data)
    var _solutions = []
    if (res.data.length > 0) {
      for (var i in res.data) {
        var temp = res.data[i]
        var tempcata = {}
        tempcata.detailID = temp.pk
        tempcata.name = temp.fields._name
        tempcata.price = temp.fields._price
        tempcata.content = temp.fields._repairInstructions
        _solutions.push(tempcata)
      }
      this.setData({
        solutions: _solutions,
      })
      var _max = this.getMaxPrice()
      var _min = this.getMinPrice()
      console.log(_max)
      console.log(_min)
      this.setData({
        count: true,
        max_price: _max,
        min_price: _min,
      })
    }

  },
  getCategorySuccess(res){
    console.log(res.data[0])
    var temp = res.data[0].fields
    var _issue = {}
    _issue.image = temp._thumbnail
    _issue.content = temp._description
    this.setData({
      issue: _issue
    })
  },
  getResponseFailed(res) {
    console.log(res)
  },
  onLoad: function (options) {
    this.init()
    console.log(options)
    var categoryID = options.id
    api.getMalfunctionDetailByCategory(categoryID, this.getDetailSucess, this.getResponseFailed)
    api.getMalfunctionCategoryByID(categoryID, this.getCategorySuccess, this.getResponseFailed)
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