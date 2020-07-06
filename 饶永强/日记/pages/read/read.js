// pages/read/read.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorid: '',
    searchstr: '',
    nr:''
  },
  bindauthorid: function (e) {
    console.log(e.detail.value)
    this.setData({
      authorid: e.detail.value
    })
  },
  bindsearchstr: function (e) {
    console.log(e.detail.value)
    this.setData({
      searchstr: e.detail.value
    })
  },
  newBtnDown() {
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/read/authorid/' + this.data.authorid + '/searchstr/' + this.data.searchstr ,
      success: function (res) {
        console.log(res.data)
        if (res.data.info != 1) {
          wx.showToast({
            title: '未找到日记',
            duration: 10000,
            success: function () {
              wx.navigateTo({
                url: '/pages/read/read',
              })
            }
          })
          
        }
        else{
          nr=res.data.data

        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})