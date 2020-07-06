// pages/add/add.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isbn: null,
    name: null,
    author: null,
    price: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      isbn: app.globalData.isbn,
      name: app.globalData.name,
      author: app.globalData.author,
      price: app.globalData.price
    })
  },

  add:function(){
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/addbook',
      data: {
        isbn: this.data.isbn,
        name: this.data.title,
        author: this.data.author,
        price: this.data.price.substring(0, this.data.price.length - 1)
      },
      success: function (e) {
        console.log(e)
        wx.showToast({
          title: '入库成功',
          icon: 'success',
          duration: 500
        })
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