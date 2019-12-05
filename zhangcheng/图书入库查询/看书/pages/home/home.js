// pages/home/home.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },
  saoma: function () {
    wx.scanCode({
      onlyFromCamera: true,
      success: function (res) {
        console.log(res.result)
        wx.request({
          url: 'https://www.98api.cn/api/isbn.php',
          data: {
            isbn: res.result
          },
          success: function (r) {
            console.log(r),
              app.globalData.isbn = res.result
            app.globalData.name = r.data.title
            app.globalData.author = r.data.author[0]
            app.globalData.price = r.data.price
            wx.navigateTo({
              url: '/pages/add/add',
            })
          }
        })
      }
    })
  },
  
  search: function () {
    wx.navigateTo({
      url: '/pages/search/search',
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