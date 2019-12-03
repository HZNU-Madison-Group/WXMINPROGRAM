// pages/Guess/GuessGame.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
    colors: ['black', 'red'],
    num:0,
    k:1,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var newtarget= Math.floor(Math.random() * 10)
    this.setData({
      target: newtarget
    })
  },
  click: function (e) {
    var temp = this.data.color;
    var tempnum = this.data.num;
    tempnum = tempnum + 1;
    temp[e.currentTarget.id] = this.data.colors[1];
    this.setData({
      color: temp,
      num: tempnum
    })
    console.log(e.currentTarget.num)
    if (e.currentTarget.id > this.data.target) {
      wx.showToast({
        title: 'too large',
        icon: 'none'
      })
    } else {
      if (e.currentTarget.id == this.data.target) {
        wx.setStorageSync('key', this.data.num)
        wx.showToast({
          title: 'You get it!!',
          success: function () {
            wx.navigateTo({
              url: '/pages/Result/Result'
            })
          }
        })
      }
      else {
        wx.showToast({
          title: 'too little',
          icon: 'none'
        })
      }
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

  }
})