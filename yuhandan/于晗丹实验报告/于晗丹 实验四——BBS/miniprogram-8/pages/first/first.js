// pages/first/first.js
Page({

  /**
   * Page initial data
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 500,
    imgUrls: [
      "http://a3.qpic.cn/psb?/V11QEEA73uXVM2/PNKa1otwJkTCI3OJYvOrRxPeraps1PkTXB.fzDQTCtk!/b/dLYAAAAAAAAA&bo=0QSBBNEEgQQRBzA!&w=273&h=256&rf=travel",
      "http://a3.qpic.cn/psb?/V11QEEA73uXVM2/7cm.rwUg52v4ix1Zc*g.0uIsk0OiCHC7so1LToXFMYs!/b/dLYAAAAAAAAA&bo=2gRrBNoEawQRBzA!&w=281&h=256&rf=travel",

    ],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },
  write:function(){
wx.navigateTo({
  url: '/pages/write/write'
})
  },
  search:function(){
    wx.navigateTo({
      url: '/pages/initial/initial'
    })
  },
  me:function(){
    wx.navigateTo({
      url: '/pages/me/me'
    })
  },
  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})