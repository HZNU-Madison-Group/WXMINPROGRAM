// pages/c/c.js
Page({

  /**
   * Page initial data
   */
  data: {
    p:0,
    value:[],
    currentindex:0,
    x:[{
      name:"div",
      attrs:{
        class:"",
        style: "color:red;font-size:56px"
      },
      children:[{
        type:"text",
        text:"1234"
      }, {
          type: "text",
          text: "1234234"
        }]
    }],
    pickrange:['aaa','bbb','ccc','ddd'],
    pickrange1:[['a','b','c'],['1','2','3'],['as','df','rg']]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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
  alter:function(e){
console.log(e)
this.setData({
  currentindex: e.detail.value
})
  },
  click:function(e){
    this.setData({
      p: this.data.p+10
    })
  },
  t:function(e){
    console.log(e)
    this.setData({
      value: e.detail.value
    })
  },
  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

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