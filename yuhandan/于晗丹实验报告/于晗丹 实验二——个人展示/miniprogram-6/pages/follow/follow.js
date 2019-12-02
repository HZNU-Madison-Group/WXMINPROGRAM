// pages/follow/follow.js
Page({

  /**
   * Page initial data
   */
  data: {
    aixin:"oldaixin",
    list_data: [],
    title: "正在加载数据...",
    followers:25
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      list_data: ["Initially, I think I can start off by pointing out something about who this person is. Actually, I know quite a lot people who are bilingual, however I’d like to share about my best friend who is fluent in Japanese. Her name is Sherry chen and she is currently studying in a Japanese university. In fact, she is the one who has inspired me a lot to learn the second language.",
        "The factor that makes her unique to me is the fact that despite acquiring Japanese on her own, she managed to become excellent at it like a native speaker.The chief reason encouraging her to learn this language is indeed quite simple.", "When she was in high school, she fell in love with a Japanese person and gradually became addicted to this country’s culture and language.Therefore, she exerted herself and put a lot of effort in Japanese with the first target of being able to communicate with her boyfriend in his mother tongue.", "Time went by and her passion for this language grew so strong that she committed herself to conquer it, no matter how hard it is when it comes to the matter of self – study.However, at the end of the day, she achieved it with flying colors and she decided to study in Japan.It is my friend who gives me a precious lesson in life: Do the thing you are truly passionate about and you will rock it."]
    },1000)
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
click:function(e){
  var aixin=this.data.aixin
  var followers=this.data.followers
  aixin="aixin"
  followers = followers+1
this.setData({
  aixin: aixin,
  followers:followers
})
  wx.setStorage({
    key: 'followers',
    data: this.data.followers
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
    var that = this
    setTimeout(function () {
      that.setData({
        list_data: ["Initially, I think I can start off by pointing out something about who this person is. Actually, I know quite a lot people who are bilingual, however I’d like to share about my best friend who is fluent in Japanese. Her name is Sherry chen and she is currently studying in a Japanese university. In fact, she is the one who has inspired me a lot to learn the second language.",
          "The factor that makes her unique to me is the fact that despite acquiring Japanese on her own, she managed to become excellent at it like a native speaker.The chief reason encouraging her to learn this language is indeed quite simple.", "When she was in high school, she fell in love with a Japanese person and gradually became addicted to this country’s culture and language.Therefore, she exerted herself and put a lot of effort in Japanese with the first target of being able to communicate with her boyfriend in his mother tongue.", "Time went by and her passion for this language grew so strong that she committed herself to conquer it, no matter how hard it is when it comes to the matter of self – study.However, at the end of the day, she achieved it with flying colors and she decided to study in Japan.It is my friend who gives me a precious lesson in life: Do the thing you are truly passionate about and you will rock it.", "Describe a singer or band that you like ?","Actually, as soon as I saw this topic there are numerous persons coming into my mind, but to be honest, I only know a little about them.Well, in comparison to others, the very one I’d like to share with you is the westlife that is an Irish pop band formed in 1998, with the five members including Kian Egan, Mark Feehily, Shane Filan, and the other two singers’ names I cannot remember clearly(Nicky Byrne and Brian McFadden)","If my memory could serve me correctly, I would say that the first time I got to know them because of an inspiring song called you raise my up which was performed by the westlife.The melody of this song is soothing and wonderful, therefore, I started to learn more about this group and gradually became interested in this band group.","Anyway, moving on to what sort of music they play, I think the main style of their songs is romantic and lyrical which makes me comfortable and relaxed while listening to their songs.And they also have Rap songs, such as World of Our own. (By the way, what surprised me a lot is that)","Well, with regard to why I like this band, I suppose the biggest reason would be that I’m quite keen on their special voices which comfort me a lot.Such beautiful sounds are amazing to listen to.You know, every time, I listen to their piece of songs, I will set the single tune circulation and be immersed in it for a long time.Also, I like their personalities, they were harmonious and never cared much about other people’s unreasonable criticism.Though the members have changed a lot, their songs are still popular.","Although they have dismissed, they always get together.For example, just two months ago, they had a performing tour at Shanghai.","I hope their songs can spread among the world forever."],
        title:"加载完毕"
      })
    }, 1000)
  
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})