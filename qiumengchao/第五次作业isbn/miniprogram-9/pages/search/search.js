// pages/search/search.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isbn: '',
    d: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  isbnInput: function (e) {
    console.log(e.detail.value)
    this.setData({
      isbn: e.detail.value
    })
  },

  clicktosearch: function () {
    var that = this;
    wx.request({
      //用户信息添加：实现对数据表reg的数据增加
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/searchbook/isbn/' + this.data.isbn,
      //提示信息框的设置
      success: function (res) {
        console.log(res.data[0])
        // that.setData({
        //   d: res,
        // });
        // console.log(d)
        app.globalData.isbn = res.data[0].isbn
        app.globalData.name = res.data[0].bookname
        app.globalData.author = res.data[0].bookauthor
        app.globalData.price = res.data[0].price



        wx.showToast({
          title: 'Successfully Regist! You can Login now',
          icon: 'none',
          duration: 10000
        })
        wx.navigateTo({
          url: '/pages/searchresult/searchresult',
        })
      }
    })
  },
})