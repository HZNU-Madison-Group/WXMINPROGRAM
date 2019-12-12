// pages/guess/guess.js
var a= getApp()
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    clicked:[0,0,0],
    d: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
    targetnumber:Math.round(Math.random()*10),
    mycolor:['black','red'],
    counterclicked:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  click:function(e){
    console.log(e.currentTarget.id)
    var temp=this.data.d;
    var tempcount=this.data.counterclicked;
    tempcount=tempcount+1
    temp[e.currentTarget.id]='red'
    a.globalData.t = this.data.counterclicked
    this.setData({
      d:temp,
      counterclicked:tempcount
    })
    if(e.currentTarget.id>this.data.targetnumber){
      wx.showToast({
        title: 'too large',
        icon:'none'
      })
    }else{
      if(e.currentTarget.id==this.data.targetnumber){
       wx.showToast({
          title: 'Congraduation!!',
          duration:50000,
          success:function(){
            wx.navigateTo({
              url: '/pages/result/result',
            })
          }
        })
      }else{
        if (e.currentTarget.id<this.data.targetnumber){
        wx.showToast({
          title: 'too litter',
          icon:'none'
        })
      }
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