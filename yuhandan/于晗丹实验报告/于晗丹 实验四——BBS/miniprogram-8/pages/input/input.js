Page({

  /**
   * 页面的初始数据
   */
  data: {
    focusInput: false,
    height: '',
    isInput: false,
    reason_input: ''
  },
  inputFocus(e) {
    console.log(e, '键盘弹起')
    this.setData({
      height: e.detail.height,
      isInput: true
    })
  },
  inputBlur() {
    console.log('键盘收起')
    this.setData({
      isInput: false
    })
  },

  focusButn: function () {
    this.setData({
      focusInput: true,
      isInput: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  bind: function (e) {

    var that = this

    var reason_input = that.data.reason_input
    reason_input = e.detail.value
    this.setData({
      reason_input: reason_input
    });

  },
  save: function (e) {
    var that = this
    var app = getApp()
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
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})