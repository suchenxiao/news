//index.js
Page({
  data: {
    newsTypes: [
      { name: '国内', code: 'gn'},
      { name: '国际', code: 'gj'},
      { name: '财经', code: 'cj'},
      { name: '娱乐', code: 'yl'},
      { name: '军事', code: 'js'},
      { name: '体育', code: 'ty'},
      { name: '其他', code: 'other'}
    ],
    newsType: '',
    newsList:[
      { 
        id: '',
        title: '',
        source: '',
        time: '',
        imgUrl: ''
      }
    ]
  },
  onLoad: function() {
    this.setNewsType(this.data.newsTypes[0].code);
    this.getNews();
  },

  getNews: function (callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: this.data.newsType
      },
      success: res => {
        let result = res.data.result;
        this.setNews(result);
      },
      complete: () => {
        callback && callback();
      }
    });
  },
  setNews: function(res) {
    let newsList = [];
    for( let i =0; i < res.length; i++) {
      newsList.push({
      id : res[i].id,
      // 标题最多25个字， 超出部分用 ···代替
      title: (res[i].title.length < 25) ? res[i].title : res[i].title.substring(0, 24) + ' ···',
      source : res[i].source,
      // 先通过截取字符串位置方法取时间
      // TODO:处理XSD时间格式
      time: res[i].date.substring(11, 16), 
      imgUrl : res[i].firstImage
      });
    }
    this.setData({newsList : newsList});
  },
  setNewsType(type, index){
    this.setData({
      newsType: type
    });
  },
  onTapNewsItem: function(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id,
    })
  },
  onTapNewsType: function (e) {
    console.log(e);
    this.setNewsType(e.currentTarget.dataset.type);
    this.getNews();
  }
})
