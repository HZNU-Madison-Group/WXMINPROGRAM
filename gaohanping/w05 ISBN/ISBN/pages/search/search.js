// pages/search/search.js
const app = getApp()
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
  formSubmit: function(e) {
    var that = this;
    var formData = e.detail.value.id; //获取表单所有name=id的值  
    wx.request({
      url: 'https://www.98api.cn/api/isbn.php?isbn=' + formData,
      data: formData,
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res)
        that.setData({
          isbn: formData,
          title: res.data.title,
          author: res.data.author[0].name,
          publisher: res.data.publisher,
          price: res.data.price
        })
        console.log(formData)
        wx.showToast({
          title: '搜索成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
})