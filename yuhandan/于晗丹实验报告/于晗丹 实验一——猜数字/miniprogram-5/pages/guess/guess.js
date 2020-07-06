// pages/guess/guess.js
Page({

  /**
   * Page initial data
   */
  data: {
    //clicked:[0,0,0],
    //myColor:["red","gray"],
    c: ["light gray", "light gray", "light gray", "light gray", "light gray", "light gray", "light gray", "light gray", "light gray", "light gray"],
    targetNumber:'none',//当没有触发开始时，还没有产生随机数
    count:0
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
  //下拉
  onPullDownRefresh:function(){
    console.log("Pull")
  },
  //上拉触底
  onReachBottom:function(){
    console.log("Reach")
  },
  //滚动
  onPageScroll:function(e){
    console.log(e)
  },
  //设置一个点击go触发的一个开始动作，且再此之前，点击数字符号不会发生任何事件
  click0:function(event){
    //当触发开始，则产生一个随机数
    var target = Math.floor(Math.random() * 10)
    this.setData({
      targetNumber:target,
      count:0
    })
    var array = this.data.c;
    //当触发开始，则将所有数字符号变红激活，且提示可以开始
    array.forEach((item,index)=>{//一一获取c数组中的每一个元素，并一一对它们进行修改
      wx.showToast({
        title: 'Ready go!',
        icon: 'none',
        duration: 5000
      });
      var sItem="c["+index+"]";
      this.setData({
        [sItem]:"red"
      })
    })  
  },
  //设置一个点击数字符号触发的动作
  click:function(event){
    var index = event.currentTarget.id;
    var array = this.data.c;
    //判断该数字是否已经被激活，如果它对颜色为浅灰色，此时显示提示语，然后返回，不进行任何操作，注意不会被记录猜测次数
    if (array[index] == "light gray") {
      wx.showToast({
        title: 'You have not begin!',
        icon: 'none',
        duration:6000
      })
      return
    }
    //首先判断该数字是否已经猜过，即当它的颜色为gray时候，此时显示提示语，然后返回，不进行任何操作直接返回，注意不会被记录猜测次数
    if (array[index] == "gray") {
      wx.showToast({
        title: 'You have chose it!',
        icon:'none',
        duration: 6000
      })
      return
    }
    var cnt = this.data.count;
    cnt = cnt + 1;
    //
    array[index]="gray";
    this.setData({
      c:array,
      count:cnt
    })
    
    if (index>this.data.targetNumber){
      wx.showToast({
        title:'too big',
        icon:'none',
        duration: 6000
      })
    }else{
      if (index==this.data.targetNumber){
        wx.setStorage({
          key: 'counts',
          data: cnt
        })
        wx.setStorage({
          key: 'target',
          data: this.data.targetNumber
        })
        wx.navigateTo({
          url: '/pages/result/result'
        })   
      }else{
        wx.showToast({
          title: 'too small',
          icon: 'none',
          duration: 6000
        })
      }
    }
  }
  
})