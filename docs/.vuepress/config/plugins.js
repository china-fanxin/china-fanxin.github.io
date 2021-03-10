// 插件配置
module.exports = [
  // 本地插件
  // [require('../plugins/love-me'), { // 鼠标点击爱心特效
  //   color: '#11a8cd', // 爱心颜色，默认随机色
  //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
  // }],
  // 弹窗公告插件
  // [
  //   "@vuepress-yard/vuepress-plugin-window", {
  //     title: "Fanxinの公告",
  //     contentInfo: {
  //       title: "全体起立！！ 🎉🎉🎉",
  //       needImg: false,
  //       // imgUrl: "https://gitee.com/china-fanxin/blogimg/raw/master/img/bfe62bc72f9cbb16a36b93b90bc7029.jpg",
  //       content: "接受最新消息扫码关注我们的公众号哦",
  //       contentStyle: ""
  //     },
  //     bottomInfo: {
  //       btnText: '关于',
  //       linkTo: 'https://china-fanxin.gitee.io/about/'
  //     },
  //     closeOnce: true
  //   }
  // ],
  // ['meting', {
  //   // metingApi: "https://meting.sigure.xyz/api/music",
  //   meting: {
  //     // 网易
  //     server: "netease",
  //     // 读取歌单
  //     type: "playlist",
  //     mid: "13529775",
  //   },          
    // // 不配置该项的话不会出现全局播放器
    // aplayer: {
    //   // 吸底模式
    //   fixed: true,
    //   mini: true,
    //   // 自动播放
    //   autoplay: true,
    //   // 歌曲栏折叠
    //   listFolded:true,
    //   // 颜色
    //   theme: '#f9bcdd',
    //   // 播放顺序为随机
    //   order: 'random',
    //   // 初始音量
    //   volume: 0.1,
    //   // 关闭歌词显示
    //   lrcType: 0
    // },
    // mobile :{
    //   // 手机端去掉cover图
    //   cover: false,
    // }
  // }],
  ['flowchart'],// 流程图插件
  ["vuepress-plugin-boxx"],//随机增加名人名言
  //趣味标题插件
  [
    "dynamic-title",
    {
      showIcon: "/favicon.ico",
      showText: "(/≧▽≦/)欢迎帅哥美女！",
      hideIcon: "/failure.ico",
      hideText: "(●—●)呜呜，不要走嘛！！",
      recoverTime: 2000
    }
  ],
  ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容",
      buttonText: "刷新"
    }
  }],
  'vuepress-plugin-baidu-autopush', // 百度自动推送
  ['sitemap', {
    hostname: "https://china-fanxin.gitee.io",
    // 排除无实际内容的页面
    exclude: ["/404.html"]
  }
  ],
  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  [
    'thirdparty-search',
    {
      thirdparty: [
        {
          title: '在MDN中搜索',
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
        },
        // {
        //   title: '在Runoob中搜索',
        //   frontUrl: 'https://www.runoob.com/?s=',
        // },
        // {
        //   title: '在Vue API中搜索',
        //   frontUrl: 'https://cn.vuejs.org/v2/api/#',
        // },
        {
          title: '在Bing中搜索',
          frontUrl: 'https://cn.bing.com/search?q=',
        },
        {
          title: '通过百度搜索本站的',
          frontUrl: 'https://www.baidu.com/s?wd=site%3Achina-fanxin.gitee.io',
        },
      ],
    },
  ],

  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: 'f51282946293436c5d014679fbc6caf6',
    },
  ],
  [
    'vuepress-plugin-comment',
    {
      choosen: 'valine',
      // options选项中的所有参数，会传给Valine的配置
      options: {
        el: '#valine-vuepress-comment',
        appId: 'KIrRYR4WaKX2HldEck7LCkkI-gzGzoHsz',
        appKey: 'no69hvqJfXRXSmDMMbEMgGBz',
        placeholder: '来这里留下你的痕迹呀！(支持MarkDown语法)',
        avatar: 'wavatar',
        enableQQ: true,
        visitor: true,
        requiredFields: ['nick'],
        path: '<%- frontmatter.commentid || frontmatter.permalink %>'
      }
    }
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]
