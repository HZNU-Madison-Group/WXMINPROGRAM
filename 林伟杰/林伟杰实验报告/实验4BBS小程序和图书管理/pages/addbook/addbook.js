// pages/addbook/addbook.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isbn: null,
    name: null,
    author: null,
    price: null,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      isbn: app.appData.r.isbn,
      name: app.appData.r.name,
      author: app.appData.r.author,
      price: app.appData.r.price,
    })

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

  },
  confirm: function() {
    console.log(typeof (this.data.price))
    console.log(this.data.price)
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/addbook/isbn/' + this.data.isbn + '/name/' + this.data.name + '/author/' + this.data.author + '/price/' +this.data.price,
      success: function(res) { //连接成功
        console.log(res.data)
        if (res.data.result == 1) { //addbook成功
          console.log(1)
          console.log(res.data.errMsg)
          wx.showToast({
            title: res.data.errMsg,
          })
        } else {
          console.log("入库失败")
          res.data.errMsg
          wx.showToast({
            title: "入库失败",
          })
        }
      }
    })
  },

  price: function(event) {
    this.setData({
      price: parseInt(event.detail.value)

    })


  },
})