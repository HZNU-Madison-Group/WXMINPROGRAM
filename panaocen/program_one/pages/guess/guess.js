// pages/guess/guess.js
var app = getApp()

//click: 1 setInterval(run, 60);

Page({
  run: function (){
    var t = Math.floor(Math.random() * 10)
  this.setData({
      te: t
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    te: 0,
    speed:[30,60,120],
    clicked:[0,0,0],
    mycolor:['black','red'],
    d: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {

  },
  start: function () { 
     setInterval(this.run, 1000)
    },
  pause: function(){

  }
  click:function(e){
    console.log(e.currentTarget.id)
    var temp = this.data.d;
    temp[e.currentTarget.id] = 'red'
    this.setData({
      d:temp
    })
    if(e.currentTarget.id<this.data.targetnumber){
      wx.showToast({
        title: 'too little',
        icon:'none'
      },
          app.globalData.counter_clicked +=1
        )
    }else{
      if (e.currentTarget.id == this.data.targetnumber){
        app.globalData.counter_clicked +=1
        console.log(app.globalData.counter_clicked)
        wx.showToast({
          title: 'Congraduation!!',
          duration:3000,
          success: function () {
            wx.navigateTo({
              url: '/pages/result/result',
            })} 
        })
      }
      else{
        wx.showToast({
          title: 'too bigger',
          icon: 'none'
        })
        app.globalData.counter_clicked +=1
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
      title: 'welcom to this game wait 3s!!',
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