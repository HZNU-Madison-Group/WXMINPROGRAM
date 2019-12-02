// pages/initial/initial.js
Page({

  /**
   * Page initial data
   */
  data: {
diary:[],
index:'',
    focusInput: false,
    height: '',
    isInput: false,
    reason_input: '',
    value:''
  },

 
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that=this;
    var diary=that.data.diary;
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/browserroot',
      success: function (res) {
        diary=res.data.data
      that.setData({
        diary: diary
      })
      console.log(that.data.diary)
      }
    })
  },
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

  focusButn: function (e) {
    this.setData({
      focusInput: true,
      isInput: false
    })
    var app=getApp()
    app.globalData.infoid = e.currentTarget.id;
  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },
  require:function(e){
    var that = this
    var index = that.data.index
    var app = getApp()
    app.globalData.infoid = e.currentTarget.id;
    index = e.currentTarget.id;
    that.setData({
      index:index
    })
    console.log(that.data.index)
    wx.navigateTo({
      url: '/pages/input/input',
    })
  },
  look:function(e){
    this.setData({
      focusInput: false
    })
    var app = getApp()
    app.globalData.infoid = e.currentTarget.id;
    
    wx.navigateTo({
      url: '/pages/look/look',
    })
  },
  bind: function (e) {

    var that = this

    var reason_input = that.data.reason_input
    reason_input = e.detail.value
    this.setData({
      reason_input: reason_input
    });
    

  },
  save: function (e) {
    var that = this
    var app = getApp()
    that.setData({
      value:''
    })
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/reply',
      data: {
        userid: app.globalData.userid,
        problem: that.data.reason_input,
        parentid: app.globalData.infoid
      },
      success: function (res) {
        console.log(res)
      },
    })
  },
  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})