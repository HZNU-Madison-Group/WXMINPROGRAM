// pages/createproblem/createproblem.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: null,
    userid:null,
    createText:null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //监听是否登录
    if (app.appData.userInfo == null) {
      wx.redirectTo({
        url: '/pages/tixin/tixin',
      })
    } else {
      this.setData({
        userid: app.appData.userInfo.id,
        username: app.appData.userInfo.username,
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
  createText:function(event){
    
    this.setData({
      createText:event.detail.value
    })
    console.log(this.data.createText)
  
  },

  create:function(){
    wx.navigateTo({
      url: '/pages/forum/forum',
    })
   
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/createproblem/userid/' + this.data.userid + '/problem/' + this.data.createText,
      success: function (res) { //连接成功
        if (res.data.info == 1) { //write成功
          console.log('创建成功')
          

        }
      }
    })
   

  }
})