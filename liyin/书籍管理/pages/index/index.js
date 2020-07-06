//index.js
//获取应用实例

const app = getApp()

Page({
  data: {
    author: '',
    name: '',
    isbn: '',
    price: ''

  },
  //事件处理函数

  clicksm: function() {
    var that = this;
    wx.scanCode({
      onlyFromCamera: true,
      success: function(res) {
        console.log(res.result)
        that.setData({
            isbn: res.result
          }),
          wx.request({
            url: 'https://www.98api.cn/api/isbn.php',
            data:{
              isbn: res.result
            },
            success: function(r) {
              console.log(r.data)
              console.log('author', r.data.author[0].name)
              console.log('name', r.data.title)
              console.log('price', parseInt(r.data.price))
              console.log('isbn', that.data.isbn)
              that.setData({
                author: r.data.author[0].name,
                name: r.data.title,
                price: parseInt(r.data.price)
              })
            }
          })

      }
    })
  },
  clickrk: function() {
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/addbook/isbn/' + this.data.isbn + '/name/' + this.data.name + '/author/' + this.data.author + '/price/' + this.data.price,
      success: function(res) {
        if (res.length != 0) {
          wx.showToast({
            title: '入库成功',
            icon: 'none',
            duration: 8000
          })
        } else {
          wx.showToast({
            title: '失败',
            icon: 'none',
            duration: 8000
          })
        }
      }
    })
  },

  clickcx: function() {
    wx.navigateTo({
      url: '/pages/view/view',
    })
  },


  onLoad: function() {

  },

})