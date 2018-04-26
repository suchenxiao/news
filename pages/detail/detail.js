// pages/detail/detail.js
Page({
  data: {
    newsDetail: 
      {
        id: '',
        title: '',
        source: '',
        time: '',
        imgUrl: '',
        readCount: 0,
        content:[
          {
            type: "",
            text: ""
          }
        ]
      }
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    });
    this.getNews();
  },

  getNews: function (callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id: this.data.id
      },
      success: res => {
        let result = res.data.result;
        if (res.data.code === 200) {
          //console.log(res);  
          this.setNews(result);
        }
      },
      complete: () => {
        callback && callback();
      }
    });
  },
  setNews: function (res) {
    let newsDetail = {
        id: res.id,
        title: res.title,
        source: res.source,
        // 先通过截取字符串位置方法取时间
        // TODO:处理XSD时间格式
        time: res.date.substring(11, 16),
        imgUrl: res.firstImage,
        readCount: res.readCount,
        content : res.content
    };
    //console.log(newsDetail);
    this.setData({ newsDetail: newsDetail });
  }
})