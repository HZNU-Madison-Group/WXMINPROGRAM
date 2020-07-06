// pages/chaxun/chaxun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nr:'',
    isbn:'',
  },
  bindisbn : function(e){
    console.log(e.detail.value)
    this.setData({
      isbn: e.detail.value
    })
  },
  newBtnDown(){
    var that = this
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/searchbook/isbn/' + this.data.isbn,
      success: function (res) {
        console.log(res.data)
          that.setData({
            nr: res.data
          })
        wx.showToast({
          title: '查询成功',
          duration: 1000
        })

       
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }

})