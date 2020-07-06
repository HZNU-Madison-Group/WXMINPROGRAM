// pages/search/search.js
Page({

  /**
   * Page initial data
   */
  data: {
    id: '',
    searchstr: '',
    index: '',
    str1: [],
    diary: ''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this;
    var id = that.data.id
    wx.getStorage({
      key: 'id',
      success: res => {
        that.setData({
          id: res.data
        });
        console.log(res.data)
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
  //存储关键词
  bindsearch: function (e) {
    console.log(e.detail.value)

    this.setData({
      searchstr: e.detail.value
    })
  },
  //根据关键词进行搜索
  search: function () {
    var that = this;
    var str = that.data.str1;

    wx.request({
      //用户信息的查询匹配：对数据表login进行查询
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/read',
      data: {
        authorid: that.data.id,
        searchstr: that.data.searchstr
      },
      success: function (res) {
        console.log(res.data.data)
        //查询用户信息是否存在login数据表中
        //若存在，则跳转页面
        if (res.data.data.length != 0) {
          str = res.data.data
          that.setData({
            str1: str,
          })
        }
        //否则显示提示语
        else {
          wx.showToast({
            title: 'There are not any diaries include these contents',
            icon: 'none',
            duration: 3000
          })
        }


      },
      fail: function () {
        console.log("fail")
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