// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input_display: false,
    code:'',
  },
  bindword: function (e) {
    console.log(e.detail.value)
    this.setData({
      code: e.detail.value
    })
  },
  clickToScan: function () {
    var that = this
    wx.scanCode({
      url : '',
      onlyFromCamera: true,
      success(res) {
        console.log(res)
        console.log(res.result)
        that.setData({
          code: res.result
        })
        // res.result = '9787302506744' 
        wx.request({
          url: 'http://www.98api.cn/api/isbn.php?isbn=' + res.result,
          success: function(mes){
            console.log("成功获得书籍信息：",mes.data)
            wx.setStorageSync('data', mes.data)
            console.log(mes.data)
            console.log(mes.data.title)
            console.log(mes.data.author[0].name)
            console.log(mes.data.price)
            wx.showModal({
              title: '成功获得书籍信息',
              content: "书籍isbn编码：" + that.data.code + "\n书名：" + mes.data.title + "\n作者：" + mes.data.author[0].name + "\n价格：" + mes.data.price, //内容是把拆分出来的部件用字符串拼接起来
              confirmText: "确定入库",
              success(res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                  console.log('确定!!!!')
                  wx.request({
                    url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/addbook/isbn/' + that.data.code + '/name/' + mes.data.title + '/author/' + mes.data.author[0].name + '/price/' + mes.data.price.substring(0,mes.data.price.length-2),
                    success: function (res) {
                      console.log('成功!!!!')
                      wx.showToast({
                        icon: "none",
                        title: '成功入库',
                      })
                    },
                    fail:function(res){
                      console.log('失败!!!!')
                      wx.showToast({
                        icon: "none",
                        title: res.data.errMsg,
                      })
                    }
                  })

                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          }
        })
      }
    })
  },
  clickToSearch:function(){
    this.setData({
      input_display: true
    })
  },
  clickToSearch2:function(){
    var that = this
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/searchbook/isbn/' + that.data.code,
      success: function (res) {
        if ((res.data.length)!=0){
        console.log(res)
        console.log(res.data)
        wx.showModal({
          title: '成功检索到书籍信息如下：',
          content: "书籍isbn编码：" + that.data.code + "\n书名：" + res.data[0].bookname + "\n作者：" + res.data[0].bookauthor + "\n价格：" + res.data[0].price,
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
        }
        else{
          wx.showModal({
            title: '检索失败：',
            content: "未找到书籍",
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})