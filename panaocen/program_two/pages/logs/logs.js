//logs.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHide: true,
    loadingText: "加载中"
  },
  callmeTap: function () {
    wx.makePhoneCall({
      phoneNumber: '********'
    })
  },
  gowechat:function(){
    wx.showModal({
      title: '1',
      content: '1',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({ loadingHide: false });
    setTimeout(function () {
      that.setData({ loadingHide: true });
    }, 1000)
  }
})
