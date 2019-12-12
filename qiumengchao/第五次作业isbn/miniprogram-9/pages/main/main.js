const app = getApp()
Page({
  data: {
    servers: []
  },

  onLoad: function () {
    var listService = [


      {
        title: '图书isbn码管理',
        items: [{
          name: '扫描添加',
          url: '/pages/saoma/saoma',
          icon: '/images/扫码.png',
          code: '11'
        },
        {
          isBind: true,
          name: '查询图书',
          url: '/pages/search/search',
          icon: '/images/查找.png',
          code: '11'
        },
        ]
      }, {
        title: '其他',
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