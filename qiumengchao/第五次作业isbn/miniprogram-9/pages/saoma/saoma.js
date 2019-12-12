// pages/saoma/saoma.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    d: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;//=====注意此处，要用that 指代this=====
    wx.scanCode({
      onlyFromCamera: true,
      success: function (res) {
        console.log(res.result)
        wx.request({

          url: 'https://www.98api.cn/api/isbn.php',
          data: {
            isbn: res.result
          },

          // url: 'http://49.234.70.238:9001/book/worm/isbn?isbn=' + res.result, 
          // url: 'http://49.234.70.238:9001/book/worm/isbn',
          // data:{
          //   isbn: res.result
          // },
          success: function (r) {
            console.log(r),
              that.setData({
                d: r,
              });
            app.globalData.isbn = res.result
            app.globalData.name = r.data.title
            app.globalData.author = r.data.author[0]
            app.globalData.price = r.data.price
            console.log(res.result)
            console.log(r.data.title)
            console.log(r.data.author[0].name)
            console.log(r.data.price)
            wx.navigateTo({
              url: '/pages/add/add',
            })
          }
        })
      }
    })
  }
})