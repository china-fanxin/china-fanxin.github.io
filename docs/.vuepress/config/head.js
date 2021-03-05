// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: 'https://gitee.com/china-fanxin/blogimg/raw/master/img/avatar.jpg' }], //favicons，资源放在public文件夹
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1,user-scalable=no' }],//移动栏优化
  ['meta', { name: 'keywords', content: '程序员博客,技术博客,网站搭建,Java开发,SSM,Spring,Spirng MVC,Mybatis,Spring boot,Web开发,Web后端,程序员自媒体,后端面试题,技术文档,vue,vuepress,markdown', },],
  ['meta', { name: 'baidu-site-verification', content: 'af3120c4f43b9c4b031e9dabe30c1a16' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  // 引入jquery
  ["script", {"language": "javascript","type": "text/javascript","src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"}],
  ['link', { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css" }],
  ['script', { src: "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js" }],
  // 引入鼠标点击脚本
  ["script", {
    "language": "javascript",
    "type": "text/javascript",
    "src": "/js/MouseClickEffect.js"
  }],
  // [
  //   'script',
  //   {
  //     'data-ad-client': 'ca-pub-7828333725993554',
  //     async: 'async',
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //   },
  // ], // 网站关联Google AdSense 与 html格式广告支持
]
