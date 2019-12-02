//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    test: false,
    test1: false,
    ISBN: "",
    title: "",
    author: "",
    price: "",
    description: "",
    designed: "",
    page: ""

  },
  //事件处理函数

  onLoad: function () {

  },


  //图书入库
  test: function () {
    var that = this
    wx.scanCode({
      success: function (res) {
        console.log(res.result)
        that.setData({
          ISBN: res.result
        })
        wx.request({
          url: 'https://www.98api.cn/api/isbn.php',
          data: {
            isbn: res.result
          },
          success: function (r) {
            console.log(r)
            that.setData({
              test: true,
              test1: true,
              title: r.data.title,
              author: r.data.author[0].name,
              price: r.data.price
            })
          }
        })
      }
    })

  },


  //图书查询
  search: function (e) {
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/searchbook',
      data: {
        isbn: this.data.reason_input
      },
      success: r => {
        console.log(r)
        this.setData({
          test: true,
          test1: false,
          ISBN: this.data.reason_input,
          title: r.data[0].bookname,
          author: r.data[0].bookauthor,
          price: r.data[0].price
        })
      },
    })
  },


  //查询框的设置
  inputFocus(e) {
    console.log(e, '键盘弹起')
    this.setData({
      height: e.detail.height,
      isInput: true
    })
  },
  inputBlur() {
    console.log('键盘收起')
    this.setData({
      isInput: false
    })
  },

  focusButn: function () {
    this.setData({
      focusInput: true,
      isInput: true
    })
  },
  bind: function (e) {
    var that = this
    var reason_input = that.data.reason_input
    reason_input = e.detail.value
    this.setData({
      reason_input: reason_input
    })
  },


  //确认图书入库操作
  confirm: function () {
    console.log(this.data.ISBN),
      console.log(this.data.title),
      console.log(this.data.author),
      console.log(this.data.price.substring(0, this.data.price.length - 1)),
      wx.request({
        url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/addbook',
        data: {
          isbn: this.data.ISBN,
          name: this.data.title,
          author: this.data.author,
          price: this.data.price.substring(0, this.data.price.length - 1)
        },
        success: function (e) {
          console.log(e)
          wx.showToast({
            title: '入库成功',
            icon: 'success',
            duration: 500
          })
        }
      })
  },

  // 取消操作
  cancel: function () {
    this.setData({
      test: false
    })
  },


  //对自动入库信息进行修改
  ISBN: function (e) {
    this.setData({
      ISBN: e.detail.value
    })
  },
  author: function (e) {
    this.setData({
      author: e.detail.value
    })
  },
  title: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  price: function (e) {
    this.setData({
      price: e.detail.value
    })
  }



})

