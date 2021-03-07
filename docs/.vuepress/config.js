const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  // theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "Fanxin's blog",
  description: 'Java开发技术博客，项目实战、知识总结、生活随笔。',
  base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
    externalLinks:
    { target: '_blank', rel: 'nofollow noopener noreferrer' }
  },
  head,
  plugins,
  themeConfig,
  
}
