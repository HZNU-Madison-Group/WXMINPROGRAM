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
    
  }
  ,
  globalData: {
    userInfo: null,
    author: "yhd"
  }
})