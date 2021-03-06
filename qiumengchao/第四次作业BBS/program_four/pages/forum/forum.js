// pages/forum/forum.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid: null,
    username: null,
    browserroot: null, //所有根内容



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //监听是否登录
    if (app.appData.userInfo == null) {
      wx.redirectTo({
        url: '/pages/woring/woring',
      })
    } else {
      this.setData({
        userid: app.appData.userInfo.id,
        username: app.appData.userInfo.username,
      })
    }
    //一打开页面就加载browserroot
    var that = this
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/browserroot',//获取所有根问题贴，非回复帖，即parentid为0的问题贴，id为主键，userid没什么用
      success: function (res) { //连接成功
        if (res.data.info == 1) { //read成功
          that.setData({
            browserroot: res.data.data
          })
        }
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

  },


  read: function (e) {
    app.appData.pid = e.target.dataset.id //获取replay按钮上的id
    wx.navigateTo({
      url: '/pages/reply/reply',

    })
  },

  create: function () {
    wx.navigateTo({
      url: '/pages/creat/creat',
    })
  }





})