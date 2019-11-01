// pages/reply/reply.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    problem: ''
  },

bindproblem:function(e){
this.setData({
  problem:e.detail.value
})
},

  clickreply: function() {
    var that = this
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/reply/userid/' + app.globalData.userid + '/problem/' + this.data.problem + '/parentid/' + app.globalData.pid,
      success: function(res) {
        console.log(app.globalData.userid)
        if (res.data.info == 1) {
          wx.showToast({
            title: '成功',
            icon: 'none',
            duration: 8000,
          })
        } else {
          wx.showToast({
            title: '未找到相应的论坛',
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