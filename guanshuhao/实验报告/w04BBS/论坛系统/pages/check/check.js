// pages/check/check.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: [{ "id": 1, "problem": "123123" }, { "id": 2, "problem": "123123" }],
    userid:49
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;//=====注意此处，要用that 指代this=====
    this.userid=app.globalData.userid
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/browserroot', 
      method: 'get',// OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      data: {
      },
      success: function (res) {
        console.log(res);
        that.setData({ //======不能直接写this.setDate======
          message: res.data.data, //在相应的wxml页面显示接收到的数据
        });
      }
    })
  },


  delbt: function () {
    console.log(app.globalData.userid)
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/deleteproblembyid/userid/' + app.globalData.userid + '/pid/' + app.globalData.id,
      success: function (res) {
        if (res.data.info == 1) {
          wx.showToast({
            title: '删除成功',
            icon: 'none',
            duration: 18000,
          })
          wx.navigateTo({
            url: '/pages/check/check',
          })
        } else {
          wx.showToast({
            title: '删除失败',
            icon: 'none',
            duration: 18000
          })
        }
      }
    })
  },


  replybt: function (e) {
    app.globalData.id=e.currentTarget.id;
    console.log(app.globalData.id)
    wx.navigateTo({
      url: "/pages/reply/reply",
    })
  },

  rreplybt: function (e) {
    app.globalData.id = e.currentTarget.id;
    console.log(app.globalData.id)
    wx.navigateTo({
      url: "/pages/rreply/rreply",
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