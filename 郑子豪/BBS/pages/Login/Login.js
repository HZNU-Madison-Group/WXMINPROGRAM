// pages/Login/Login.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
  },
  bindusername: function (e) {
    console.log(e.detail.value)
    this.setData({
      username: e.detail.value
    })
  },
  bindpassword: function (e) {
    console.log(e.detail.value)
    this.setData({
      password: e.detail.value
    })
  },
  clicktemp: function(){
    wx.switchTab({
      url: '/pages/search/search',
    })
  },
  clickToRegister: function () {
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/reg/username/' + this.data.username + '/password/' + this.data.password,
      success: function (res) {
        console.log(res.data.data)
        wx.showToast({
          icon: "none",
          title: '注册成功',
        })
      }
    })
  },
  clickToLogin: function () {
    var that = this
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/login/ username/' + this.data.username + '/password/' + this.data.password,
      success: function (res) {
        console.log(res.data.data)
        app.globalData.username = that.data.username
        console.log("username", app.globalData.username)
        wx.showToast({
          icon: "none",
          title: '登录成功',
        })
        wx.switchTab({
          url: '/pages/search/search'
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