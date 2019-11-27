// pages/history/history.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:[],
  },
  clickToread:function(e){
    var that = this
    var ids = e.currentTarget.id
    console.log("id:", e.currentTarget.id)
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/browserroot',
      success: function (res) {
        if (res.data.data != false) {
          console.log("res.data.data:", res.data.data)
          console.log("datas:", that.data.datas)
          console.log("userid:", app.globalData.username)
          for (var a in res.data.data){
            console.log("a:", res.data.data[a])
            if (res.data.data[a].userid == app.globalData.username){
              //将a加入数组datas
              that.data.datas.push(res.data.data[a])
            }
          }
          that.setData({
            datas: that.data.datas
          })
          console.log("datas:", that.data.datas)
        }
      }
    })
        //如果想要删除子贴，那么还需要循坏跑一遍从各个帖子中和userid对上的所有讯息，效率太低了，我更推荐改掉接口，所以这里偷个懒
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