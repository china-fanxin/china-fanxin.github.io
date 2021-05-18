// nav
module.exports = [
  { text: '首页', link: '/' },

  // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
  {
    text: '小白建站',
    link: '/buildWebsite/',
    items: [
      { text: '建站选择',link: '/pages/fe46ec/'},
      { text: '博客建站',link: '/pages/6693a3/'},
      { text: '博客写作',link: '/pages/dbc68b/'},
    ],
  },
  {
    text: 'Java',
    link: '/javaweb/',
    items: [
      { text: 'Java重难点知识',link: '/pages/65bdc4/'},
      { 
        text: '常用框架',
        items:[
          { text: 'Spring-boot',link: '/pages/65bdc4/'},
        ]
      },
    ],
  },
  {
    text: '大数据学习',
    link: '/bigdata/',
    items: [
      { text: 'Hadoop',link: '/pages/2587e8/'},
    ]
  },
  {
    text: 'Linux、Shell',
    link: '/linuxandshell/',
    items: [
      { text: 'Linux学习巩固',link: '/pages/2899d1/'},
      { text: 'Shell学习巩固',link: '/pages/c127de/'},
    ]
  },
  {
    text: '爬虫技术',
    link: '/spider/',
  },
  {
    text: '自媒体',
    link: '/media/',
    items: [
      { text: '博客',link: '/pages/f01e08/'},
      { text: '公众号',link: '/pages/f4fe76/'},
      { text: '视频UP主',link: '/pages/aa4305/'},
    ],
  },
  {
    text: '杂物间',
    link: '/lifelog/',
    items: [
      { text: '实用工具',link: '/pages/8c71af/'},
      { text: '生活感悟',link: '/pages/e79e98/'},
      { text: '好文摘录',link: '/pages/9c2189/'},
      { text: '优秀开源',link: '/pages/eea94d/'},
    ],
  },
  {
    text: '小众技术',
    link: '/nichetech/',
    items: [
      { text: 'Oracle APEX',link: '/pages/7f5bcb/'}
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
