const app = getApp()

Page({
  data: {
    servers: []
  },

  onLoad: function () {
    var listService = [
      {
        title: '社会',
        items: [{
          name: '捐助',
          url: '/pages/first/first',
          icon: '/images/1.png',
          code: '11'
        },
        {
          isBind: true,
          name: '捐衣物',
          url: '/pages/first/first',
          icon: '/images/1.png',
          code: '11'
        }
        ]
      },

      {
        title: '生活',
        items: [{
          name: '微信',
          url: '/pages/first/first',
          icon: '/images/1.png',
          code: '11'
        },
        {
          isBind: true,
          name: '微信',
          url: '/pages/first/first',
          icon: '/images/1.png',
          code: '11'
        }, {
          isBind: true,
          name: '火车票',
          url: '/pages/first/first',
          icon: '/images/1.png',
          code: '11'
        },
        ]
      },
      {
        title: '家庭',
        items: [{
          isBind: true,
          name: '账单',
          url: '/pages/first/first',
          icon: '/images/1.png',
          code: '11'
        }
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