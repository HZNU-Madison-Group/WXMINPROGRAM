// pages/reg/reg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: null,
    password1: null,
    password2: null

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

  regBtnClick: function () {
    if (this.data.password1 == this.data.password2) {
      wx.request({
        url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/reg/username/' + this.data.username + '/password/' + this.data.password1,
        //用{{}}变量的话无需this.data.变量，直接this.变量即可,而直接调用的话需this.data.变量
        success: function (res) { //连接成功
          console.log(res.data.info)
          if (res.data.info == 1) { //注册成功
            wx.showToast({
              title: '注册成功',
            })
            wx.redirectTo({
              url: '/pages/login/login',
            })
          } else {
            wx.showToast({
              title: '注册失败',
            })
          }
        }
      })
    }
  },

  regusernameInput: function (event) {
    this.setData({
      username: event.detail.value
    })
  },
  regpasswordInput1: function (event) {
    this.setData({
      password1: event.detail.value
    })
  },
  regpasswordInput2: function (event) {
    this.setData({
      password2: event.detail.value
    })
  }
})