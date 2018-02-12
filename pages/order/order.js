// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasContact: true,
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