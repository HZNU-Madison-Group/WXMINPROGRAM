// pages/rreply/rreply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nr:null
  },
  nrInput: function (e) {
    console.log(e.detail.value)
    this.setData({
      nr: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  publishbt: function (e) {
    console.log(getApp().globalData.id)
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/reply/userid/'+getApp().globalData.userid+'/problem/'+this.data.nr+'/parentid/' + getApp().globalData.id,
      success: function (res) {
        if (res.data.info == 1) {
          wx.showToast({
            title: '发布成功',
            icon: 'none',
            duration: 18000,
          })
          
        } else {
          wx.showToast({
            title: '发布失败',
            icon: 'none',
            duration: 18000
          })
        }
      }
    })
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