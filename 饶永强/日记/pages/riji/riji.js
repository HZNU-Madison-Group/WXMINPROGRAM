// pages/riji/riji.js

Page({
  data: {
    image: '/pages/image/222.jpg',//背景图片
  },
  newBtnDown() {
    wx.navigateTo({
      url: '/pages/write/write',
    })
 
  },
  newBtnDown2() {
    wx.navigateTo({
      url: '/pages/read/read',
    })

  },

  onLoad: function (options) {
    //-监听页面加载
    
    }
    
    
  },
 

)