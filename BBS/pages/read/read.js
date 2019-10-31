// pages/read/read.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nr: '',
    userid: null,
  },
  deletebutton() {
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/deleteproblembyid/userid/' + app.globalData.userid + '/pid/' + app.globalData.pid,
      success: function(res) {
        console.log(res.data)
        if (res.data.info == 1) {
          wx.showToast({
            title: '删除成功',
            duration: 1000
          })

        }
      }
    })

  },
  fanhuibutton() {
    wx.navigateTo({
      url: '/pages/luntan/luntan',
    })
  },
  huifubutton(e) {
    app.globalData.pid = e.target.dataset.id;
    wx.navigateTo({
      url: '/pages/reply/reply',
    })
  },
 chakanreplybutton(e) {
    app.globalData.pid = e.target.dataset.id;
    var that = this
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/browsereplybyid/pid/' + app.globalData.pid,
      success: function(res) {
        console.log(res.data)
        if (res.data.info == 1) {
          that.setData({
            nr: res.data.data
          })


        }

      }
    })
  },
  chakanbutton() {
    var that = this
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/browserroot',
      success: function(res) {
        console.log(res.data)
        if (res.data.info == 1) {
          that.setData({
            nr: res.data.data
          })


        }

      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userid: app.globalData.userid
    })
  },

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function() {

},

/**
 * 生命周期函数--监听页面显示
 */
onShow: function() {

},

/**
 * 生命周期函数--监听页面隐藏
 */
onHide: function() {

},

/**
 * 生命周期函数--监听页面卸载
 */
onUnload: function() {

},

/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh: function() {

},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function() {

},

/**
 * 用户点击右上角分享
 */
onShareAppMessage: function() {

}
})