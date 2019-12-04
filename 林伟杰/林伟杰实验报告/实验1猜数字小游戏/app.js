//app.js
App({
  onLaunch: function (res) {
   console.log('welcome');
   wx.login({
     success:function(res){
       console.log(res)
     }
   })
  },
  onShow:function(response){
    console.log(response)
  },
  onPageNotFound:function(){
    wx.redirectionTo({
      url:'pages/index/index',//找不到时转到这个页面
    })
  },
  globalData: {
    userInfo: null,
  },


})
