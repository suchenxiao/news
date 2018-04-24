//index.js

Page({
  data: {
    newsTypes: [
      { name: '国内', code: 'gn' },
      { name: '国际', code: 'gj' },
      { name: '财经', code: 'cj' },
      { name: '娱乐', code: 'yl' },
      { name: '军事', code: 'js' },
      { name: '体育', code: 'ty' },
      { name: '其他', code: 'other' }
    ],
    newsList:[
      { 
        id: '1519631218506',
        title: '外媒称香港回归15年打破“经济将死”预言',
        source: '中国新闻网',
        time: '09:34',
        imgUrl: 'http://img1.gtimg.com/news/pics/hv1/38/85/1076/69988613.jpg'
      },
      {
        id: '1519631218591',
        title: '实德指媒体窃公司机密 已向某媒体递律师函',
        source: '腾讯财经',
        time: '11:32',
        imgUrl: 'http://img1.gtimg.com/finance/pics/hv1/33/207/1023/66573393.jpg'
      }
    ]
  }
})
