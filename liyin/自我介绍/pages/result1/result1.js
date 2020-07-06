// pages/result1/result1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '/images/gg/1.png',
    cnt: 0
  },
  click1: function (e) {

    this.setData({
      cnt: e.currentTarget.id
    })
    console.log(this.data.cnt)
    wx.setStorage({
      key: 'name1',
      data: this.data.cnt
    })
    wx.showToast({
      title: 'wait',
      success: function () {
        wx.navigateTo({
          url: '/pages/result2/result2', 
        })
      }
    })
  },
  click2: function () {
    wx.showToast({
      title: 'wait',
      success: function () {
        wx.navigateTo({
          url: '/pages/result3/result3',
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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