// pages/result/result.js
Page({

  /**
   * Page initial data
   */
  data: {
    total:0,//记录总共猜测的次数
    target:0//记录正确答案的值
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    //获取Storage中记录的猜测次数
    wx.getStorage({
      key: 'counts',
      success: res => {
        this.setData({
          total:res.data
        });
        console.log(res.data)
      },
    }),
    //获取Storage中记录的正确值
    wx.getStorage({
      key: 'target',
      success: res => {
        this.setData({
          target:res.data
        });
        console.log(res.data)
      },
    })
  },
  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    wx.showToast({
      title: 'Congraduation',
      duration:6000
    })

  }



})