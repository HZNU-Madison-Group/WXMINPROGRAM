// pages/zhuce/zhuce.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '/images/changyong/123.jpeg',
    username: '',
    password: '',
  },
  bindusername: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  bindpassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  clicktoreg: function () {
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/reg/username/' + this.data.username + '/password/' + this.data.password,
      success: function (res) {       
        if (res.data.info == 1) {
          wx.showToast({
            title: '注册成功，请登录',
            icon: 'none',
            duration: 8000
          })
          wx.navigateTo({
            url: '/pages/denglu/denglu',
          })
      
        } else {
          wx.showToast({
            title: 'error',
            icon: 'none',
            duration: 8000
          })
        }
      }
    })

  },
  
  clicklogin: function () {
    var that = this;
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/login/username/' + this.data.username + '/password/' + this.data.password,
      success: function (res) {
        if (res.data.info == 1) {
          app.globalData.userid = res.data.data.id;
          wx.navigateTo({
            url: '/pages/center/center',
          })
        } else {
          wx.showToast({
            title: '密码错误',
            icon: 'none',
            duration: 80000
          })
        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'counts',
      success: function (res) {
        console.log(res)
      },
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