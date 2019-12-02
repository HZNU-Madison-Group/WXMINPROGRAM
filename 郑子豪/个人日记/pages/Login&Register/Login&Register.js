// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    authorid:''
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
  clicktoreg:function(){
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/read/authorid/1/searchstr/3',
      success:function(res){
        console.log(res.data.data)
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
      success: function(res) {
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
      title: 'conlfsjdlaj;',
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