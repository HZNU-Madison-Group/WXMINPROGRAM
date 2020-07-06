// pages/see/see.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorid:null,
    username:null,
    searchstr:null,
    searchresult:null,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.appData.userInfo == null) {
      wx.redirectTo({
        url: '/pages/tixin/tixin',
      })
    } else {
      this.setData({
        authorid: app.appData.userInfo.id,
        username:app.appData.userInfo.username,
      })
    }
   

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
  seedairy_authorid: function (event) {
    this.setData({
      authorid: event.detail.value
    })

  },

  seedairy_searchstr: function (event) {
    this.setData({
      searchstr: event.detail.value
    })
    
  },

  //查询数据库

  confirm: function () {
    var that=this   
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/read/authorid/'+that.data.authorid+'/searchstr/'+that.data.searchstr ,
      success: function (res) { //连接成功
        if (res.data.info == 1) { //read成功
        that.setData({
          searchresult:res.data.data
        })      
        }
      }
  })
 
  }
  
})