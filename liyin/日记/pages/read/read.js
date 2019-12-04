// pages/read/read.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorid: '',
    searchstr: '',
    riji: '',
  },
  bindauthorid: function(e) {
    console.log(e.detail.value)
    this.setData({
      authorid: e.detail.value
    })
  },
  bindsearchstr: function(e) {
    console.log(e.detail.value)
    this.setData({
      searchstr: e.detail.value
    })
  },
  clickread: function() {
    var that=this
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/read/authorid/' + that.data.authorid + '/searchstr/' + that.data.searchstr,
      success: function(res) {
        
        if (res.data.data.length!=0) {
          that.setData({
             riji: res.data.data
          })
          wx.showToast({
            title: '成功',
            icon: 'none',
            duration: 8000,
          })
        } else {
          wx.showToast({
            title: '未找到相应的日记',
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