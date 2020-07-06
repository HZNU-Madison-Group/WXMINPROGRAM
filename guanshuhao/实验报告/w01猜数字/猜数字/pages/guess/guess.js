// pages/guess/guess.js
var app=getApp()
var common = require('../../utils/test.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //d:1,
    mycolor:['black','red'],
    d: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
    clicked:[0,0,0],
    targetnumber:Math.round(Math.random()*10),
    times:0
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    common.test()
    console.log('welcome')
  },
  click:function(e){
    console.log(e.currentTarget.id)
    var temp=this.data.d;
    temp[e.currentTarget.id]='red';
    this.data.times = this.data.times+1;
    app.count = app.count+1
    this.setData({
      d:temp
    })
    if(e.currentTarget.id>this.data.targetnumber){
      console.log("count:",app.count)
      wx.showToast({
        
        title: 'too large',
        icon:'none'
      })
    }else{
      if (e.currentTarget.id == this.data.targetnumber){
        console.log("count:", app.count)
        wx.showToast({
          title:'Congraduation',
          duration:3000,
          success:function(){
            wx.navigateTo({
              url: '/pages/result/result',
              events:{"ttt":12345}
            })
          }
        })

      }
      else{
        console.log("count:", app.count)
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
    wx.showToast({
      title: 'start',
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