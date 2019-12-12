// pages/searchresult/searchresult.js
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
})