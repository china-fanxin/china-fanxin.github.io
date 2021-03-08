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
    text: 'JavaWeb',
    link: '/javaweb/',
    items: [
      { text: 'Java重难点知识',link: '/pages/65bdc4/'},
      { 
        text: '常用框架',
        items:[
          { text: 'Spring-boot',link: '/pages/65bdc4/'},
          { text: 'Hadoop',link: '/pages/2587e8/'},
        ]
      },
    ],
  },
  {
    text: 'Jeecg-boot学习',
    link: '/jeecg-boot/',
  },
  {
    text: 'Linux、Shell',
    link: '/linuxandshell/',
    items: [
      { text: 'Linux学习巩固',link: ''},
      { text: 'Shell学习巩固',link: ''},
    ]
  },
  {
    text: '优秀开源',
    link: '/items/',
  },
  {
    text: '自媒体',
    link: '/media/',
  },
  {
    text: '生活杂记',
    link: '/lifelog/',
    items: [
      { text: '生活感悟',link: '/pages/e79e98/'},
      { text: '好文摘录',link: '/pages/9c2189/'},
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
