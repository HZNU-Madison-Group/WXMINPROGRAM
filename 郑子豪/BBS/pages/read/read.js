// pages/read/read.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pid:'',
    userid:'',
    input_display:false,
    delete_display:false,
    words:'',
    datas:[]
  },
  bindword: function (e) {
    console.log(e.detail.value)
    this.setData({
      words: e.detail.value
    })
  },
  clickToReply:function(){
    this.setData({
      input_display:true
    })
  },
  clickToReply2: function () {
    console.log(app.globalData.username, this.data.words, this.data.data.id)
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/reply/userid/' + app.globalData.username+'/problem/'+ this.data.words+'/parentid/'+ this.data.data.id,
      success: function (res) {
        console.log(res.data.data)
        wx.showToast({
          icon: "none",
          title: '回复成功',
        })
      }
    })
  },
  clickToread: function (e) { //向数据库申请数据，跳转并将数据保留到下一个页面
    var that = this
    var ids = e.currentTarget.id
    console.log("id:", e.currentTarget.id)
    console.log(that.data.datas[ids])
    that.setData({
      data: that.data.datas[ids]
    })
    wx.setStorageSync('data', that.data.data)
    console.log(that.data.data)
    wx.reLaunch({
      url: '/pages/read/read',
    })
  },
  clickTodelete:function(){
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/deleteproblembyid/' + app.globalData.username+'/pid/'+this.data.data.parentid,
      success: function (res) {
        console.log(res.data.data)
        wx.showToast({
          icon: "none",
          title: '删除成功',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var datas = wx.getStorageSync('data')
    this.setData({
      data:datas
    })
    console.log("data", this.data.data)
    console.log("userid", this.data.data.userid)
    console.log("username", app.globalData.username)
    if (app.globalData.username == that.data.data.userid) {
      console.log("显示删除按钮")
      this.setData({
        delete_display: true
      })
    }
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/browsereplybyid/pid/'+ that.data.data.id,
      success: function (res) {
        if (res.data.data != false) {
          console.log("res.data.data:", res.data.data)
          that.data.datas = res.data.data
          that.setData({
            datas: that.data.datas
          })
        }
        console.log("datas out:", that.data.datas)
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