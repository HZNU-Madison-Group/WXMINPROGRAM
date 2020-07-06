// pages/write/write.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorid: '',
    nr: '',
    xq: ''
  },
  bindauthorid: function(e) {
    console.log(e.detail.value)
    this.setData({
      authorid: e.detail.value
    })
  },
  bindnr: function(e) {
    console.log(e.detail.value)
    this.setData({
      nr: e.detail.value
    })
  },
  bindxq: function(e) {
    console.log(e.detail.value)
    this.setData({
      xq: e.detail.value
    })
  },
  clickwrite: function() {
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/write/authorid/' + this.data.authorid + '/nr/' + this.data.nr + '/xq/' + this.data.xq,
      success: function(res) {
        if (res.data.info == 1) {
          wx.showToast({
            title: '成功',
            icon: 'none',
            duration: 8000,
          })
          wx.navigateTo({
            url: '/pages/read/read',
          })
        } else {
          wx.showToast({
            title: 'id不能为空',
            icon: 'none',
            duration: 8000
          })
        }
      }
    })
  },
  chaxun: function () {
    wx.navigateTo({
      url: '/pages/read/read',
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