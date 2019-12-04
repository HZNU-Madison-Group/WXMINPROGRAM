// pages/tongji/tongji.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allresult:null,//某用户所有的日记记录
    sumdairy:0,
    sumxqgood:0,
    sumxqgeneral:0,
    sumxqbed:0,
    id:null,
    authorid: null,
    sj: null,
    nr: null,
    xq: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.appData.userInfo == null) {//未登录
      wx.redirectTo({
        url: '/pages/tixin/tixin',
      })
    }else{
      console.log(app.appData.userInfo)
      var that = this
      wx.request({
        url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/read/authorid/' + app.appData.userInfo.id + '/searchstr/',//查询所有的日记记录,是根据author的id查询而不是username查询
        success: function (res) { //连接成功
          if (res.data.info == 1) { //read成功
            wx.showToast({
              title: '查询成功',
            })
            that.setData({
              allresult: res.data.data,
            })
          } else {
            wx.showToast({
              title: '查询失败',
            })
          }
          console.log(that.data.allresult)
          var dairy_sum = null //统计日记篇数
          var xq_good_sum=null
          var xq_general_sum=null
          var xq_bed_sum=null
          for (var i in that.data.allresult){
            console.log(that.data.allresult[i].id)
            console.log(that.data.allresult[i].authorid)
            console.log(that.data.allresult[i].sj)
            console.log(that.data.allresult[i].nr)
            console.log(that.data.allresult[i].xq)
            ++dairy_sum 
            if (that.data.allresult[i].xq=="good"){
              ++xq_good_sum
            }
            if (that.data.allresult[i].xq == "general"){
              ++xq_general_sum
            }
            if (that.data.allresult[i].xq == "bed") {
              ++xq_bed_sum
            }
            
          }
          that.setData({
            sumdairy:dairy_sum,
            sumxqgood:xq_good_sum,
            sumxqgeneral:xq_general_sum,
            sumxqbed:xq_bed_sum,
          })
          console.log(that.data.sumxqgeneral)
        }
      })
      
      
    }
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

  },

  //迭代器
  bianli:function(list,i){

  }

})