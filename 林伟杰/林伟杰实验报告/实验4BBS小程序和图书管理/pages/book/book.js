// pages/book/book.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_str: null,
    search_result: null

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

  },

  addbookBtnClick: function() {
    wx.scanCode({
      onlyFromCamera: true,
      success: function(res) {
        wx.request({
          url: 'https://www.98api.cn/api/isbn.php',
          data: {
            isbn: res.result
          },
          success: function(r) {
            app.appData.r = {
              isbn: res.result,
              name: r.data.title,
              author: r.data.author[0].name,
              price: r.data.price
            }
            wx.navigateTo({
              url: '/pages/addbook/addbook',
            })
          }
        })
      }
    })
  },
  searchbookstr: function(event) {
    this.setData({
      search_str: event.detail.value
    })

  },
  searchbookBtnClick: function() {
    var that = this
    console.log("要查询的书号为：" + that.data.search_str)
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/searchbook/isbn/' + that.data.search_str,
      success: function(res) { //连接成功

          console.log("查询成功")
          console.log(res.data)
          that.setData({
            search_result: res.data
          })
          wx.showToast({
            title: "查询成功",
          })
       
      },
      fail: function(res) { //连接失败
        console.log("== url not found")
      }
    })

  }
})