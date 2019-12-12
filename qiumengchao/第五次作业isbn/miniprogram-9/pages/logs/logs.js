//logs.js
const util = require('../../utils/util.js')

Page({
  onLoad: function (options) {
    wx.scanCode({
      onlyFromCamera:true,
      success:function(res){
        console.log(res.result)
        wx.request({
          url: 'https://www.98api.cn/api/isbn.php',
          data:{
            isbn: res.result
          },
          success:function(r){
            console.log(r)
            console.log(r.data.title)
            console.log(r.data.price)
          }
        })
      }

    })
   
  }
})
