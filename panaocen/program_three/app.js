//app.js
App({
  onLaunch: function (res) {
    wx.login({
      success: function (res) {
        console.log(res)
      }
    })
  },
  onShow: function (response) {
    console.log(response)
  },
  onPageNotFound: function () {
    wx.redirectTo({
      url: 'pages/index/index',
    })
  }
  ,
  globalData: {
    userInfo: null,
    author: "pac"
  }
})