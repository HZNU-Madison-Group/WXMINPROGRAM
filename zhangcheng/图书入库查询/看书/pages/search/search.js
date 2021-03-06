// pages/search/search.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     isbn:''
  },
  isbn: function (e) {
    console.log(e.detail.value)
    this.setData({
      isbn: e.detail.value
    })
  },
  result: function () {
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/searchbook/isbn/' + this.data.isbn,
      //提示信息框的设置
      success: function (r) {
        console.log(r)
        app.globalData.isbn = r.data[0].isbn
        app.globalData.name = r.data[0].bookname
        app.globalData.author = r.data[0].bookauthor
        app.globalData.price = r.data[0].price
        wx.navigateTo({
          url: '/pages/result/result'
        })
      }
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