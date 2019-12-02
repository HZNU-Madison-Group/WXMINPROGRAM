// pages/look/look.js
Page({

  /**
   * Page initial data
   */
  data: {
    diary:[],
    uid:''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var app = getApp()
    var that=this;
    that.setData({
      uid: app.globalData.userid
    })
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/browsereplybyid',
      data:{
        pid: app.globalData.infoid
      },
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          diary:res.data.data
        })
      },
      
    })
  },
  dl: function (e) {
    var app = getApp()

    app.globalData.infoid = e.currentTarget.id;

    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/deleteproblembyid',
      data: {
        userid: app.globalData.userid,
        pid: app.globalData.infoid
      },
      success: function (res) {
        console.log(res)
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2];
        wx.navigateBack({
          delta: 1
        })
      }

    })

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