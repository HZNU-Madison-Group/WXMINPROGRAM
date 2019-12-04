// pages/jibenxinxi/jibenxinxi.js
Page({
  data: {
    dataList: ["中文名  姚明 ","外文名  Yao Ming"," 别名  明王、移动长城、小巨人、大姚 ","毕业院校  上海交通大学安泰经济与管理学院"," 运动项目  篮球"," 所属运动队  已退役"," 血型  B型"," 身高  226厘米"," 场上位置  中锋"," 体重  140.6公斤"," 鞋码  53码"," 生涯最高分  41分"," 女儿  姚沁蕾"," 小学  上海市高安路第一小学"," 研究生  香港大学 "," 出生地  上海市徐汇区"," 出生日期  1980年9月12日"," 国籍  中国"," 性别  男"," 民族  汉族 ","星座  处女座 ","重要事件  专题影片《姚明年》发行2011年正式宣布退役2016年入选篮球名人堂2017.2.23当选中国篮协主席 "," 专业特点  20英尺外精确跳投 ","主要成就 8次NBA全明星（2003 - 2009；2011）ESPN全球最有潜力运动员奖(2000)劳伦斯世界最佳新秀奖(2003)中国篮球杰出贡献奖世界最具影响力100人之一 "," 祖籍  苏州吴江 ","代表作品  我的世界我的梦"," 老婆  叶莉"," 语言  普通话、英语、吴语 ","初中  上海市第二中学"," 生肖  猴","姚明（1980年9月12日-)，出生于上海市徐汇区，前中国男子篮球运动员，司职中锋，绰号“移动长城”，中国篮球的代表人物，现任中国篮球协会主席。","姚明1998年加入国家队，此后在上海大鲨鱼效力五年，期间夺得1次CBA总冠军并拿下2次联赛MVP。2002年姚明以状元秀身份被火箭队选中，NBA生涯连续6个赛季入选全明星阵容，5次入选最佳阵容。","由于他对篮球事业的贡献，退役后被选入奈史密斯篮球名人纪念堂。","姚明篮球智商很高，打球充满灵性，手感柔和，也是球队内线防守支柱。"],
    count: 0
  },
  onPullDownRefresh() {
    var self = this;
    setTimeout(() => {
      // 模拟请求数据，并渲染
      var arr = self.data.dataList, max = Math.max(...arr);
      for (var i = max + 1; i <= max + 3; ++i) {
        arr.unshift(i);
      }
      self.setData({ dataList: arr });
      // 数据成功后，停止下拉刷新
      wx.stopPullDownRefresh();
    }, 1000);
  },
  onReachBottom() {
    var arr = this.data.dataList, max = Math.max(...arr);
    if (this.data.count < 3) {
      for (var i = max + 1; i <= max + 5; ++i) {
        arr.push(i);
      }
      this.setData({
        dataList: arr,
        count: ++this.data.count
      });
    } else {
      wx.showToast({
        title: '没有更多数据了！',
        image: '../../src/images/noData.png',
      })
    }
  }
})