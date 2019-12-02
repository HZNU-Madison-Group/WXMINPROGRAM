// pages/diary/diary.js
Page({

  /**
   * Page initial data
   */
  data: {
    reason_input:''
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
  
  //日记内容存储
  bind: function (e) {

    var that = this

    var reason_input = that.data.reason_input
    reason_input = e.detail.value
    this.setData({
      reason_input: reason_input
    });

  },
  //日记内容保存
  save: function (e) {
    var that = this
    var app=getApp()
    console.log(e)
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/reply',
      data: {
        userid: app.globalData.userid,
        problem: that.data.reason_input,
        parentid: app.globalData.infoid
      },
      success: function (res) {
        console.log(res.data)
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2];
        wx.navigateBack({
          delta: 1
        })
      },
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