// pages/diary/diary.js
Page({

  /**
   * Page initial data
   */
  data: {
    username:'',
    password:''
  },
  bindKeyInputname:function(e){
    console.log(e.detail.value)
    this.setData({
      username:e.detail.value
    })
  },
  bindKeyInputps:function(e){
    console.log(e.detail.value)
    this.setData({
      password: e.detail.value
    })
  },
  clicktoreg:function(){
    wx.request({
      url: '',
      success:function(res){
      }
    })
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