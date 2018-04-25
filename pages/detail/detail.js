// pages/detail/detail.js
Page({
  data: {
    newsDetail: 
      {
        id: '1519631218506',
        title: '外媒称香港回归15年打破“经济将死”预言',
        source: '中国新闻网',
        time: '09:34',
        imgUrl: 'http://img1.gtimg.com/news/pics/hv1/38/85/1076/69988613.jpg',
        readCount: 471,
        content:[
          {
            type: "p",
            text: "报道特别强调金融合作方面，中央支持第三方利用香港办理人民币贸易投资结算，进一步丰富香港人民币离岸产品”。自1997年7月1日回归之后，香港与内地的经济关系日益紧密，“北京方面迫切希望利用这个全球金融中心来进行重大改革试验，比如将人民币国际化的努力。”"
          },
          {
            type: "p",
            text: "一些香港居民在接受美国CNN采访时表达了对香港特区以及新任特首的看法。多数香港居民认为，回归以来，“一国两制”实行得不错，相信“一国两制”将进展良好，相信香港的前途会更光明。希望新任特首上台后，能进一步改善包括住房在内的民生条件。"
          }
        ]
      }
  },

  onLoad: function () {
    this.getNews();
  },

  getNews: function (callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id: 1523074607667
      },
      success: res => {
        let result = res.data.result;
        if (res.data.code === 200) {
          console.log(res);  
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
    console.log(newsDetail);
    this.setData({ newsDetail: newsDetail });
  }
})