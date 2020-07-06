// pages/add/add.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isbn: null,
    name: null,
    author: null,
    price: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this;
      that.setData({
        isbn : app.globalData.isbn,
        name : app.globalData.name,
        author : app.globalData.author,
        price : app.globalData.price
      })
      
    
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/addbook/isbn/' + this.data.isbn + '/name/' + this.data.name + '/author/' + this.data.author + '/price/'+this.data.price.substring(0,this.data.price.length-1),
      // url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/addbook/isbn/9787560305660/name/gg/author/11/price/88',
      // url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/addbook',
      // data:{
      //   isbn: app.globalData.isbn,
      //   name: app.globalData.name,
      //   author: app.globalData.author,
      //   price: app.globalData.price
      // },
      success:function(res){
        wx.showToast({
          title: '录入成功',
          icon: 'success',
          duration: 2000
        })
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

  }
})