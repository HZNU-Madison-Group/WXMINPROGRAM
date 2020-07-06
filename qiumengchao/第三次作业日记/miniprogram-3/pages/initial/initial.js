// pages/initial/initial.js
Page({

  /**
   * Page initial data
   */
  data: {
    id: '',
    str: [],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    //获取当前用户id
    var that = this;
    wx.getStorage({
      key: 'id',
      success: res => {
        that.setData({
          id: res.data
        });
      },

    })
    console.log(that.data.id)
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
  //编写日记
  write: function () {
    wx.navigateTo({
      url: '/pages/diary/diary',
    })
  },
  //查询
  search: function () {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  //查看
  record: function () {

    //获取当前用户所有的信息
    var str = this.data.str
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/read',
      data: {
        authorid: this.data.id,
      },
      success: res => {
        this.setData({
          str: res.data.data
        })
        console.log(this.data.str)
        wx.setStorage({
          key: 'strr',
          data: res.data.data,
        })
        wx.navigateTo({
          url: '/pages/record/record',
        })
      }

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