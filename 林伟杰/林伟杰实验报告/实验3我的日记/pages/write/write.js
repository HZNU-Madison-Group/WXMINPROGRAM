// pages/write/write.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorid:null,
    username:null,
    nr:null,
    xq:null,
    items: [
      { name: 'good', value: '好' },
      { name: 'general', value: '一般' },
      { name: 'bed', value: '差' },

    ]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    if (app.appData.userInfo == null) {
      wx.redirectTo({
        url: '/pages/tixin/tixin',
      })
    }else{
      this.setData({
        authorid: app.appData.userInfo.id,
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


  write_nr: function (event) {
    this.setData({
      nr: event.detail.value
    })
  },


  //存入数据库

  confirm: function () {
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/write/authorid/'+this.data.authorid+'/nr/'+this.data.nr+'/xq/'+this.data.xq,
      success: function (res) { //连接成功
        if(res.data.info==1){ //write成功
        wx.showToast({
          title: '写入成功',
        })
          console.log('write to successful')
          wx.switchTab({
            url: '/pages/index/index',
          })
        }else{
          wx.showToast({
            title: '写入失败',
          })
        }
      }
    })

    
  
  },

  checkboxChange: function (e) {
    this.setData({
      xq: e.detail.value
    })
  }




})