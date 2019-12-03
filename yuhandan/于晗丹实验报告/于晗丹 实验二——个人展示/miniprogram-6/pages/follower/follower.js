// pages/follower/follower.js
Page({

  /**
   * Page initial data
   */
  data: {
    aixin: ["oldaixin", "oldaixin", "oldaixin", "oldaixin", "oldaixin"],
    list_data: [],
    title: "正在加载数据..."
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      list_data: ["Do you use perfume / makeup ? Of course, I do.I love to use it because it can inform people around about who I am. So, I would wear perfume, when attending some important events, such as wedding, ceremonies or formal dinners.However, I don’t use it on daily basis.", "Do you often wear perfume/makeup? well, not that often, I wear it when attending some important events, such as wedding, ceremonies or formal dinners.However, I don’t use it on daily basis.Because makeup really costs me too much time.", "What kind of perfume do you like?Oh, personally speaking, in comparison to those perfumes with very strong flavors, I prefer those with lighter fragrance such as natural flavors from flowers.Because the lighter fragrances smell so soothing and help me loosen up a little bit while I am concentrating on my studies."]},1000)
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
  click:function(e){
    var index = e.currentTarget.id
    var c=this.data.aixin
    c[index]="aixin"
    this.setData({
      aixin:c
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
    var that = this
    setTimeout(function () {
      that.setData({
        list_data: ["Do you use perfume / makeup ? Of course, I do.I love to use it because it can inform people around about who I am. So, I would wear perfume, when attending some important events, such as wedding, ceremonies or formal dinners.However, I don’t use it on daily basis.", "Do you often wear perfume/makeup? well, not that often, I wear it when attending some important events, such as wedding, ceremonies or formal dinners.However, I don’t use it on daily basis.Because makeup really costs me too much time.", "What kind of perfume do you like?Oh, personally speaking, in comparison to those perfumes with very strong flavors, I prefer those with lighter fragrance such as natural flavors from flowers.Because the lighter fragrances smell so soothing and help me loosen up a little bit while I am concentrating on my studies.", "What does perfume mean to you?Well as for me, I think perfume is a special decoration and is also a signal of one’s personality and hobbies.For instance, if a lady wears a perfume with heavy and strong favor, it might indicate that she is a powerful and luxurious person.And if a lady wears a perfume that has a rose’s flavor, it might indicate that she is romantic and tends to date with romantic men.", "What does makeup mean to you? Well as for me, I think makeup is a special decoration which can make me feel more confident.Because makeup can cover up the appearance of my shortcomings in a degree and make me more active."],
        title: "加载完毕"
      })
    }, 1000)
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})