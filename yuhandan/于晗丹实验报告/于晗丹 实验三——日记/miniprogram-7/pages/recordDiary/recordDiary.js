// pages/recordDiary/recordDiary.js
Page({

  /**
   * Page initial data
   */
  data: {
index:'',
str:[],
    diary:''
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
    var that = this;
    wx.getStorage({
      key: 'diary',
      success: res => {
        that.setData({
          diary: res.data
        });
        console.log(res.data)
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