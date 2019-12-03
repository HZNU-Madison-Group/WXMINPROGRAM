// pages/mood/mood.js
Page({

  /**
   * Page initial data
   */
  data: {
mood:2,
c:[1,2,3]
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
click:function(e){
  var index=e.currentTarget.id;
var mood=this.data.mood
this.setData({
  mood:index
})
wx.setStorage({
  key: 'mood',
  data: index,
})
  var pages = getCurrentPages();
  var prevPage = pages[pages.length - 2];

  wx.navigateBack({
    delta: 1
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