// pages/add/add.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isbn: '',
    title: '',
    author: '',
    publisher: '',
    price: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.scanCode({
      onlyFromCamera: true,
      success: function (res) {
        console.log(res)
        wx.request({
          url: 'https://www.98api.cn/api/isbn.php',
          data: {
            isbn: res.result
          },
          success: function (r) {
            console.log(r),
              that.setData({
                isbn: res.result,
                title: r.data.title,
                author: r.data.author[0].name,
                publisher: r.data.publisher,
                price: r.data.price
              });
            wx.showToast({
              title: '录入成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    })
  }
})