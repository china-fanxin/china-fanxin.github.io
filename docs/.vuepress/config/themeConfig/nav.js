// nav
module.exports = [
  { text: '首页', link: '/' },

  // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
  {
    text: '小白建站',
    link: '/buildWebsite/',
  },
  {
    text: 'Java修炼手册',
    link: '/java/',
  },
  {
    text: 'Jeecg-boot学习',
    link: '/jeecg-boot/',
  },
  {
    text: '博客管理系统',
    link: '/javablog/',
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
