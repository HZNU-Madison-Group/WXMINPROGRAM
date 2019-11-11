// pages/replay/replay.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    browsereplybyid:null,
    replay_Text:null,
    userid: null,//不能直接赋值app.appData.userInfo.id
    id:null,//删除的回复问题id


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    var that = this
    that.setData({
      userid: app.appData.userInfo.id
    })
    that.read();
    
      
  },
  //加载页面
  read:function(){
    var that = this
    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/browsereplybyid/pid/' + app.appData.pid, //注意拼接url的字符要用''不能用""
      success: function (res) { //连接成功
        if (res.data.info == 1) { //write成功
          that.setData({
            browsereplybyid: res.data.data

          })
        }

      }
    })
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

  //跟帖的内容
  replayText:function(event){
    
      this.setData({
        replay_Text: event.detail.value
      })
   
  },

  //跟帖发表
  confirm:function(){
    var that=this

    

    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/reply/userid/' + that.data.userid + '/problem/' + that.data.replay_Text + '/parentid/' + app.appData.pid,
      success: function (res) { //连接成功
        if (res.data.info == 1) { //write成功
        console.log('发表成功')
        that.read();
        wx.navigateTo({
          url: '/pages/reply/reply',
        })
        
        }
      }
    })
    


  },

  reply:function(e){
    app.appData.pid=e.target.dataset.id;
    wx.navigateTo({
      url: '/pages/reply/reply',
    })
    
  },
  dele:function(e){
    this.data.id=e.target.dataset.id
    console.log(this.data.id)
    console.log(e.target.dataset.id)

    wx.request({
      url: 'http://172.22.130.33/index.php/Ajaxapi/Ajaxapi/deleteproblembyid/userid/'+this.data.userid+'/pid/'+this.data.id,
      success(res){
        if(res.data.info==1){
          
          wx.navigateTo({
            url: '/pages/reply/reply',
          })
        }

  
      }
   
   
    })


    

  }


})