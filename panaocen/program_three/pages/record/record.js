

Page({

  /**
   * Page initial data
   */
  data: {
    id:0,
str:[],
index:'',
diary:''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'strr',
      success: res => {
        this.setData({
          str: res.data
        });
        console.log(res.data)
      },
    })
    wx.getStorage({
      key: 'id',
      success: res => {
        this.setData({
          id: res.data
        });
        console.log(this.data.id)
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