// pages/search/search.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    id:'',
    datas:[],
    data:[],
    word:''
  },
  bindword:function(e){
    console.log(e.detail.value)
    this.setData({
      word: e.detail.value
    })
  },
  bindkeyword: function (e) {
    console.log(e.detail.value)
    this.setData({
      pid: e.detail.value
    })
  },
  clickToread:function(e){ //向数据库申请数据，跳转并将数据保留到下一个页面
    var that=this
    var ids =e.currentTarget.id
    console.log("id:",e.currentTarget.id)
    console.log(that.data.datas[ids])
    that.setData({
      data: that.data.datas[ids]
    })
    wx.setStorageSync('data', that.data.data)
    console.log(that.data.data)
    wx.navigateTo({
      url: '/pages/read/read',
    })
  },
  clickToCreate:function(){
      wx.request({
        url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/createproblem/userid/' + app.globalData.username+'/problem/'+this.data.word,
        success: function (res) {
         wx.showToast({
            icon: "none",
            title: '发布成功',
          })
        }
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.username)
    this.setData({
      username: app.globalData.username
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
    var that = this
      wx.request({
        url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/browserroot',
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