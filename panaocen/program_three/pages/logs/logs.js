//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  clicktolog: function () {
    var that = this;
    var id = that.data.authorid;
    wx.request({
      //用户信息的查询匹配：对数据表login进行查询
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/login',
      data: {
        username: that.data.username,
        password: that.data.password
      },
      success: function (res) {
        console.log(res.data.data)
        //查询用户信息是否存在login数据表中
        //若存在，则跳转页面
        if (res.data.data != null) {
          id = res.data.data.id
          that.setData({
            authorid: res.data.data.id
          })
          wx.setStorage({
            key: 'id',
            data: id,
          })
          wx.navigateTo({
            url: '/pages/initial/initial',
          })

        }
        //否则提示
        else {
          wx.showToast({
            title: 'The information entered is incorrect',
            icon: 'none',
            duration: 10000
          })
        }
      },
      fail: function () {
        console.log("fail")
      }
    })
  }
})
