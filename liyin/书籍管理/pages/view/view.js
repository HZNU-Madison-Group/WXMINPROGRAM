// pages/view/view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isbn: '',
    shuji: ''
  },
  bindisbn: function(e) {
    this.setData({
      isbn: e.detail.value
    })
  },

  clickchaxun: function(e) {
    var that = this
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/searchbook/isbn/' + this.data.isbn,
      success: function(res) {
        if (res.length != 0) {
          console.log(res)
          that.setData({
            shuji: res.data
          })
          wx.showToast({
            title: '成功',
            icon: 'none',
            duration: 8000
          })
        } else {
          wx.showToast({
            title: '失败',
            icon: 'none',
            duration: 8000
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})