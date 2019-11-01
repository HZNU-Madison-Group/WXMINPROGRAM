// pages/result/result.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    authorid: ''
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
  clicktoreg1: function () {
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/login/username/' + this.data.username + '/password/' + this.data.password,
      success: function (res) {
        console.log(res.data.data)
        if (res.data.info == 1) {
          app.globalData.userid = res.data.data.id;
          wx.navigateTo({
            url: '/pages/luntan/luntan',
          })
        }
        else {
          wx.showToast({
            title: 'chucuo',
            icon: 'none',
            duration: 8000
          })
        }
      }
    })
  },
  clicktoreg2: function () {
    wx.showToast({
      title: 'wait',
      success: function () {
        wx.navigateTo({
          url: '/pages/zhuce/zhuce',
        })
      }
    })
  }
  ,
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
    wx.showToast({
      title: 'wait',
    })
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