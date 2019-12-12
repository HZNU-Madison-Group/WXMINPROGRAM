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


    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/addbook/isbn/' + this.data.isbn + '/name/' + this.data.name + '/author/' + this.data.author + '/price/' + this.data.price.substring(0, this.data.price.length - 1),
   
      success: function (res) {
        wx.showToast({
          title: '录入成功',
          icon: 'success',
          duration: 2000
        })
      }
    })

  },

})