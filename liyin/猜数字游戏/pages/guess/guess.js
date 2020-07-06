// pages/guess/guess.js
Page({
  logBtn: function (options) {
    wx.switchTab({
      url: '../index/index'
    })
  },
  jumpBtn:function (options){
    wx.switchTab({
      url: '../result/result'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    clicked: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    mycolor:['black','red'],
    targetnumber:Math.round(Math.random()*10),
    d: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
    cnt:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  click:function(e){
    console.log(e.currentTarget.id) 
    var temp=this.data.d;
    var tempcnt=this.data.cnt;
    tempcnt=tempcnt+1
    temp[e.currentTarget.id] = 'red'

    this.setData({
      d: temp,
      cnt:tempcnt
    })

    if (e.currentTarget.id > this.data.targetnumber) {
      wx.showToast({
        title: 'too large',
        icon: 'none'
      })
    } else {
      if (e.currentTarget.id == this.data.targetnumber){
        wx.setStorage({
          key: 'counts',
          data: this.data.cnt,
        })
        wx.showToast({
          title: 'Congraduation!!',
          duration:2000,
          success:function(options){
            wx.switchTab({
              url: '/pages/result/result'
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