// pages/saoma/saoma.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isbn: '',
    name: '',
    author: '',
    price: '',

  },
  saomabutton() {
    var that = this
    wx.scanCode({
      onlyFromCamera: true,
      success: function(res) {
        console.log(res.result)
        wx.request({
          url: 'https://www.98api.cn/api/isbn.php',
          data:{
            isbn:res.result
          },
          success: function(r) {
            console.log(r.data)
            that.setData({
              isbn: res.result,
              name: r.data.title,
              author: r.data.author[0].name,
              price: parseInt(r.data.price),
            })

          }
        })
      }
    })
  },
  rukubutton() {
    console.log(this.data.isbn)
    console.log(this.data.name)
    console.log(this.data.author)
    console.log(this.data.price)
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/addbook/isbn/' + this.data.isbn + '/name/' + this.data.name + '/author/' + this.data.author + '/price/' + this.data.price,

      success: function (res) {
        console.log(res.data)
          wx.showToast({
            title: '入库成功',
            duration: 1000
          })

        
      }
    })

  },
  chaxunbutton() {
    wx.navigateTo({
      url: '/pages/chaxun/chaxun',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  }

})