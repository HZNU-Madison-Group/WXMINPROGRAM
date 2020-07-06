// pages/diary/diary.js
Page({

  /**
   * Page initial data
   */
  data: {
    mood: 2,
    reason_input: '',
    id: '',
    str: ''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'input',
      success: res => {
        this.setData({
          reason_input: res.data
        });
      },
    })
    wx.getStorage({
      key: 'id',
      success: res => {
        this.setData({
          id: res.data
        });
      },
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
    var mood = this.data.mood
    var id = this.data.id
    wx.getStorage({
      key: 'mood',
      success: res => {
        this.setData({
          mood: res.data
        });
      },
    })
  },
  //心情选择
  chosemood: function () {
    wx.navigateTo({
      url: '/pages/mood/mood',
    })
  },
  //日记内容存储
  bind: function (e) {

    var that = this

    var reason_input = that.data.reason_input
    reason_input = e.detail.value

    wx.setStorage({
      key: 'input',
      data: reason_input,
    })
    this.setData({
      reason_input: reason_input
    });

  },
  //日记内容保存
  save: function (e) {
    var that = this
    console.log(e)
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/write',
      data: {
        authorid: that.data.id,
        nr: that.data.reason_input,
        xq: that.data.mood
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