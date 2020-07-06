

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
  //查看详情
  clickme: function (e) {
    var that = this
    var index = that.data.index
    index = e.currentTarget.id;
    that.setData({
      index: index
    })
    wx.setStorage({
      key: 'index',
      data: index,
    })
    //根据用户id筛选信息
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/read',
      data: {
        authorid: that.data.id,
      },
      success: function (res) {
        var array = res.data.data
        var diary = that.data.diary
        //当触发开始
        array.forEach((item, index) => {
          console.log(item.id)
          console.log(that.data.index)
          //筛选出用户选中的日记
          if (item.id == that.data.index) {
            diary = item
            that.setData({
              diary: diary
            })
          };
        })
        wx.setStorage({
          key: 'diary',
          data: diary,
        })
        wx.navigateTo({
          url: '/pages/recordDiary/recordDiary',
        })
      },
    })
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