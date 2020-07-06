// pages/login/login.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    username: null,
    password: null

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

  },

  loginBtnClick: function () { 
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/login/username/'+this.data.username+'/password/'+this.data.password,
      success: function (res) { //连接成功
      if(res.data.info==1){//登录成功     
       app.appData.userInfo = { id: res.data.data.id, username: res.data.data.username, password: res.data.data.password }
       wx.showToast({
         title: '登录成功',
       })
        wx.switchTab({
          url: '/pages/user/user',
        })
        console.log(app.appData.userInfo)
      }else{
        wx.showToast({
          title: '登录失败',
        })
      }
      }
    })
  },

  usernameInput: function (event) {
    this.setData({
      username: event.detail.value
    })
  },
  passwordInput: function (event) {
    this.setData({
      password: event.detail.value
    })
  },

  indexBtnClick: function () {

    wx.switchTab({
      url: '/pages/index/index',
    })

  },
})