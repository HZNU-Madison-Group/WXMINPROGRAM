const app = getApp()

Page({
  data: {
    servers: []
  },

  onLoad: function () {
    var listService = [
      

      {
        title: '功能',
        items: [{
          name: '查看问题',
          url: '/pages/check/check',
          icon: '/pages/images/查看1.png',
          code: '11'
        },
        {
          isBind: true,
          name: '发表问题',
          url: '/pages/publish/publish',
          icon: '/pages/images/发布11.png',
          code: '11'
        }, 
        ]
      }, {
        title: '其他服务',
        items: []
      }
    ]
    this.setData({
      servers: listService
    })
  },

  /**
   * 当点击Item的时候传递过来
   */
  bindNavigator: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
    })

  },
})