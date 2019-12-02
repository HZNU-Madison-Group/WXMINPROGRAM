// pages/result/result.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    authorid: ''
  },
  //记录用户名
  bindusername: function (e) {
    console.log(e.detail.value)
    this.setData({
      username: e.detail.value
    })
  },
  //记录用户密码
  bindpassword: function (e) {
    console.log(e.detail.value)
    this.setData({
      password: e.detail.value
    })
  },
  //注册
  clicktoreg: function () {
    var that = this;
    wx.request({
      //用户信息添加：实现对数据表reg的数据增加
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/reg',
      data:{
        username:that.data.username,
        password: that.data.password
      },
      //提示信息框的设置
      success: function (res) {
        console.log(res)
        wx.showToast({
          title: 'Successfully Regist! You can Login now',
          icon: 'none',
          duration: 10000
        })
      }
    })
  },
  //登录
  clicktolog:function(){
    var that=this;
    var app = getApp()
    wx.request({
//用户信息的查询匹配：对数据表login进行查询
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/login',
      data:{
        username:that.data.username,
         password:that.data.password
      },
      success: function (res) {
   //查询用户信息是否存在login数据表中
   //若存在，则跳转页面
       if (res!=null){
         app.globalData.userid = res.data.data.id
           wx.navigateTo({
             url: '/pages/first/first',
           })
       }
       //否则提示
       else{
         wx.showToast({
           title: 'The information entered is incorrect',
           icon: 'none',
           duration: 10000
         })
       }
      },
      fail: function () {
        console.log("fail")
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