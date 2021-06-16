/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0d2d35cd1f6dcdc8754f2975291fc5da"
  },
  {
    "url": "about/index.html",
    "revision": "8a17a69cbdf21d06e96f3785f6a06c81"
  },
  {
    "url": "archives/index.html",
    "revision": "e055e94bd2a9da401882929330ef8df8"
  },
  {
    "url": "assets/css/0.styles.67a1d172.css",
    "revision": "fb24c38154317c9ac79ec70735a29781"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.80b7fc0b.js",
    "revision": "a46f99fb89b020fad6747e5350e475ef"
  },
  {
    "url": "assets/js/11.7247e2ba.js",
    "revision": "88a11444fad94ee08be81ba7c5e96da6"
  },
  {
    "url": "assets/js/12.c6bf0a54.js",
    "revision": "3c10e98c3fa41323663b3a02682090b7"
  },
  {
    "url": "assets/js/13.21b43dd7.js",
    "revision": "fd3fa1c0be4e1112d59e6f92a7d2144c"
  },
  {
    "url": "assets/js/14.99f4f951.js",
    "revision": "19532c22315425592ce584c3aed03c18"
  },
  {
    "url": "assets/js/15.e4f4366b.js",
    "revision": "6c9071820f79def1548328b6b7b59685"
  },
  {
    "url": "assets/js/16.e6ff856e.js",
    "revision": "1b34285ff7ce51d2ee228e39e369fa74"
  },
  {
    "url": "assets/js/17.bae84091.js",
    "revision": "3aef6ca30d42aac2a016001a1a323ab1"
  },
  {
    "url": "assets/js/18.7c71518d.js",
    "revision": "a17f88665aaa11997a3214b08666be17"
  },
  {
    "url": "assets/js/19.f1dc6075.js",
    "revision": "0191e2278d009e0dd6cfbf2be0d85121"
  },
  {
    "url": "assets/js/2.bbdd2f79.js",
    "revision": "5868fadcb3acdb4082ace3176d0d4af6"
  },
  {
    "url": "assets/js/20.0413022b.js",
    "revision": "a5608003d21138097965e6ca01dab209"
  },
  {
    "url": "assets/js/21.e3dd1dd5.js",
    "revision": "7cb470e68d766fb36059e472b67c2a11"
  },
  {
    "url": "assets/js/22.596a569c.js",
    "revision": "558f287bc4b73972587bd5c93aca389e"
  },
  {
    "url": "assets/js/23.cd80ce41.js",
    "revision": "d0938e48121c9dad3cd4d73b682891e3"
  },
  {
    "url": "assets/js/24.792bfdf5.js",
    "revision": "15b58e4dae538bdd86008ab6502d93ac"
  },
  {
    "url": "assets/js/25.94e1e8f8.js",
    "revision": "4a9f0da73be4223e02d5b4bbaa0b35cd"
  },
  {
    "url": "assets/js/26.6ef58ac6.js",
    "revision": "decbf6036e18317ac7e570f9d7cfcb99"
  },
  {
    "url": "assets/js/27.25aa771c.js",
    "revision": "6394346839c5e2b7c61c5081e4b5b0c2"
  },
  {
    "url": "assets/js/28.9afdd9d3.js",
    "revision": "c1bafa8f8d04a798a1b1d7c9fb8a7db0"
  },
  {
    "url": "assets/js/29.3a5dacdc.js",
    "revision": "5ec63444760c86b8190607d73c0e9c42"
  },
  {
    "url": "assets/js/3.cbe9d5b6.js",
    "revision": "e07d81464dad22d6b6f8205ac12c31b3"
  },
  {
    "url": "assets/js/30.338e1b5c.js",
    "revision": "8022a5bebbba3e0c9f6dd3b2438b3cc1"
  },
  {
    "url": "assets/js/31.4671bd89.js",
    "revision": "41930611aa052a2a933d3c89d7b3f588"
  },
  {
    "url": "assets/js/32.be95b059.js",
    "revision": "bbfd5ceaad1b766a3d3f304c50bcfdaa"
  },
  {
    "url": "assets/js/33.d54e127e.js",
    "revision": "dfd6e958ec62f92621e8a4a9a0c23d00"
  },
  {
    "url": "assets/js/34.154457ef.js",
    "revision": "4a1e6d3b11e862f6723e6a38bc1eff5a"
  },
  {
    "url": "assets/js/35.155d828d.js",
    "revision": "32c6516a28daa1116dd2a1518c7a187e"
  },
  {
    "url": "assets/js/36.babd46b6.js",
    "revision": "2c2d416efd0d34c995dd7f2c8b379f5c"
  },
  {
    "url": "assets/js/37.ea960fa3.js",
    "revision": "09f11b5bd23dfeaf2bb4b0c6bfcd4559"
  },
  {
    "url": "assets/js/38.5386d577.js",
    "revision": "556ce1e6a7ee1ca0d854f304293fc2de"
  },
  {
    "url": "assets/js/39.8ce71ec7.js",
    "revision": "851648602db999076596ec0dd817c8a9"
  },
  {
    "url": "assets/js/4.6680bb6d.js",
    "revision": "34dd7b6b64126ab93c92c115adafa092"
  },
  {
    "url": "assets/js/40.198ef9de.js",
    "revision": "05e6006eac7707fc864f31750e898943"
  },
  {
    "url": "assets/js/41.2844db97.js",
    "revision": "e33286098607f4e293c7306f1afae407"
  },
  {
    "url": "assets/js/42.4f84dc1e.js",
    "revision": "7db8c875605eb6a3da2a03f570d0d3d8"
  },
  {
    "url": "assets/js/43.6e782044.js",
    "revision": "2cbd5a73e218b7ea9b18dbc88c532d7d"
  },
  {
    "url": "assets/js/44.0c1c26b5.js",
    "revision": "e1bc2128286274a7fc1ce9b523f7ccbe"
  },
  {
    "url": "assets/js/45.0082689d.js",
    "revision": "5c48fff91a5c8877d3a731eda82a9772"
  },
  {
    "url": "assets/js/46.21ff22ed.js",
    "revision": "a0b1b0a01a4959192f70e81d70e9241d"
  },
  {
    "url": "assets/js/47.eac620ee.js",
    "revision": "12688349cbc86d59e20eb31fc3cc8ae3"
  },
  {
    "url": "assets/js/48.0d33a34d.js",
    "revision": "70f74bcbea95ead9a1d1d1c103488083"
  },
  {
    "url": "assets/js/49.f5cbafda.js",
    "revision": "d9df5fe74cf268b3816486c026e50004"
  },
  {
    "url": "assets/js/5.be7f2e37.js",
    "revision": "3b04db97b720b27314f18af6f49f7f91"
  },
  {
    "url": "assets/js/50.6ff965e6.js",
    "revision": "3e9d32b557ee4abff24213106e7af6bd"
  },
  {
    "url": "assets/js/51.28932bd8.js",
    "revision": "367eccb0f7218c1b1140e692a34cfea9"
  },
  {
    "url": "assets/js/52.f3472f4c.js",
    "revision": "e18d57981476ef33c61f8e2bfec4f2ec"
  },
  {
    "url": "assets/js/53.e666eeb0.js",
    "revision": "00808006c78b2aae9b058f2e5322b519"
  },
  {
    "url": "assets/js/54.318e0418.js",
    "revision": "9170448a48867abe75f5e58452e84df6"
  },
  {
    "url": "assets/js/55.de3c5e32.js",
    "revision": "9ff0713908ed0aec8e24ac402ca45190"
  },
  {
    "url": "assets/js/56.9f9a9329.js",
    "revision": "52a6e020b290713d2ba29a34cfd629a7"
  },
  {
    "url": "assets/js/57.f4d48a14.js",
    "revision": "c68fbcfa284b5eb26135f0424b45f0af"
  },
  {
    "url": "assets/js/58.2edb1464.js",
    "revision": "207eace642d522f79f2cde12575d862e"
  },
  {
    "url": "assets/js/59.a276d5c8.js",
    "revision": "69c2f2a7a8ff58fce26129a32c39fffe"
  },
  {
    "url": "assets/js/6.9163b771.js",
    "revision": "b018f7047f0798567a763b377bf35cc6"
  },
  {
    "url": "assets/js/60.41339557.js",
    "revision": "4677d3828e581e27f1d08f5269711313"
  },
  {
    "url": "assets/js/61.fa2ccc81.js",
    "revision": "1fd26b183ebabf5db328e358c77231ca"
  },
  {
    "url": "assets/js/62.defac4c8.js",
    "revision": "dae9c3799bd1124d1e8a1516bd96bff7"
  },
  {
    "url": "assets/js/63.8c2952aa.js",
    "revision": "4566851430abf85b27c94960943f15d0"
  },
  {
    "url": "assets/js/64.a87427cc.js",
    "revision": "4f8d06cbf5ee43459b4786cd97c296ed"
  },
  {
    "url": "assets/js/65.0c2cd7bb.js",
    "revision": "ce36021eff137d9451132976a3b2047a"
  },
  {
    "url": "assets/js/66.6a50e1be.js",
    "revision": "2951ad0729f1cd6758a136e12590791f"
  },
  {
    "url": "assets/js/67.deb4d428.js",
    "revision": "853553b8965e0dca9b46c121db38234d"
  },
  {
    "url": "assets/js/68.5a1d7b43.js",
    "revision": "b316a159ce0b2bc9d4f982520ed96f4e"
  },
  {
    "url": "assets/js/69.c87f541e.js",
    "revision": "a70e0dd9e3fbc14fe94fe9b1c78e976b"
  },
  {
    "url": "assets/js/7.b08c4d06.js",
    "revision": "21c1377887855d03fa29601bd9e808d0"
  },
  {
    "url": "assets/js/70.815999ec.js",
    "revision": "2941743bf5cee352c98596fcca237b91"
  },
  {
    "url": "assets/js/71.6f7662de.js",
    "revision": "dc719f3414a4e56c21b805ae85a18659"
  },
  {
    "url": "assets/js/72.f29d835a.js",
    "revision": "636ca83ecd0f908019b8cc686d52bca3"
  },
  {
    "url": "assets/js/73.5173848b.js",
    "revision": "42c7262395f815a2270bc3ed2739165c"
  },
  {
    "url": "assets/js/74.2bf25c07.js",
    "revision": "00d31ac2485a639ab3961ee5dd6024b1"
  },
  {
    "url": "assets/js/75.1f23a464.js",
    "revision": "d6b21bfba63fdf9129ba6849405dbac7"
  },
  {
    "url": "assets/js/76.59258f5f.js",
    "revision": "bec2df9c6c0cdd3766480151e1d11238"
  },
  {
    "url": "assets/js/8.25064c7a.js",
    "revision": "b97c2d3d78c17d0efd9839238eeadd70"
  },
  {
    "url": "assets/js/9.ef28382d.js",
    "revision": "e656013cfd3b34e649fcd169093d1d8d"
  },
  {
    "url": "assets/js/app.c5ba37bc.js",
    "revision": "dbc97bb75506825dccfa06a187b04943"
  },
  {
    "url": "bigdata/index.html",
    "revision": "0271ec209a170cdde21495a6a89748d6"
  },
  {
    "url": "buildWebsite/index.html",
    "revision": "0fd43f6b3f873fdb2813d325b28e1a21"
  },
  {
    "url": "categories/index.html",
    "revision": "2d10970058feb1b3431547073b718dab"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "e9edff1de590e3769fbdfede047bb487"
  },
  {
    "url": "img/bg.jpeg",
    "revision": "bf3e56b6219d2cfcd39eda9b4d1ab69d"
  },
  {
    "url": "img/bg.jpg",
    "revision": "eeb52a7402b93340c8370fedd1e9e745"
  },
  {
    "url": "img/blog.png",
    "revision": "1d66f8a29a60545900f7c03d99609fae"
  },
  {
    "url": "img/git.png",
    "revision": "26caa7e6d6476cf41146237fea40df9d"
  },
  {
    "url": "img/java.png",
    "revision": "62430eb3ecae734bdf6e5218050da7e6"
  },
  {
    "url": "img/logo.jpg",
    "revision": "e9edff1de590e3769fbdfede047bb487"
  },
  {
    "url": "img/media.png",
    "revision": "49ff9a7468b101259872b00e7d706b45"
  },
  {
    "url": "img/web.png",
    "revision": "8f9e0a33a0222f13c4a766fd3581fe35"
  },
  {
    "url": "index.html",
    "revision": "2ed972ee565de23a0adebe9d774bb9df"
  },
  {
    "url": "java/index.html",
    "revision": "58169cbd8ca248184754c09f1ec9a5aa"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e1fce1a4837ff2ce4a3af7cc4805d2b1"
  },
  {
    "url": "lifelog/index.html",
    "revision": "532fa2906b149fc4aec7d4e16a9c5e1a"
  },
  {
    "url": "linuxandshell/index.html",
    "revision": "779bc3dbd59e6a3adf864abbed20d6c7"
  },
  {
    "url": "media/index.html",
    "revision": "ba6ce063e9042412806006f85d397050"
  },
  {
    "url": "nichetech/index.html",
    "revision": "f4d60c6d04e670b5f2cb98b391a1b235"
  },
  {
    "url": "pages/02be36/index.html",
    "revision": "48f1e7f159b940c136be7e653a5699f6"
  },
  {
    "url": "pages/04f104/index.html",
    "revision": "00ab7c0bae05af4f71025816156d0ab1"
  },
  {
    "url": "pages/0fc3a1/index.html",
    "revision": "65cafa56bab8479859e773b015c90697"
  },
  {
    "url": "pages/22b946/index.html",
    "revision": "4a2aaf9a719b11f6ca10015f679ba05a"
  },
  {
    "url": "pages/2587e8/index.html",
    "revision": "0592d1fc4cbba195e48fd2655e5ba625"
  },
  {
    "url": "pages/2899d1/index.html",
    "revision": "881f3c0881098943b7e484d676c0ac81"
  },
  {
    "url": "pages/3748b0/index.html",
    "revision": "5dbb51289771855bd8518b8629282f12"
  },
  {
    "url": "pages/378611/index.html",
    "revision": "b25e6776253afd1f4e1f9ae3f9cd99a5"
  },
  {
    "url": "pages/4b0d2f/index.html",
    "revision": "6df62d4a8de515d6f01010b177f439eb"
  },
  {
    "url": "pages/59eb91/index.html",
    "revision": "fd52e87f2489356c436ac08db39e7994"
  },
  {
    "url": "pages/65bdc4/index.html",
    "revision": "3fbd93a9eac5426d544f380f7cffc6b1"
  },
  {
    "url": "pages/6693a3/index.html",
    "revision": "60665c5f92f0d72c6e5c64ebe6225f7f"
  },
  {
    "url": "pages/73a216/index.html",
    "revision": "64007a51bd9e027a2897b99815ba2c99"
  },
  {
    "url": "pages/77de88/index.html",
    "revision": "84abfdb4898dd73517c33198f1ca2301"
  },
  {
    "url": "pages/7d009c/index.html",
    "revision": "01e63ec8bfc322fac8d2df725a19cd9a"
  },
  {
    "url": "pages/7f5bcb/index.html",
    "revision": "047e62fbaded00be5d5740410c33ac33"
  },
  {
    "url": "pages/82612b/index.html",
    "revision": "fe945cf0353df60bb033cbd7f3ab55b6"
  },
  {
    "url": "pages/861d97/index.html",
    "revision": "d7310d59920501746d54399ff16744be"
  },
  {
    "url": "pages/862a88/index.html",
    "revision": "e832930248edad8a8bcca1f16633d4fa"
  },
  {
    "url": "pages/8aaaae/index.html",
    "revision": "1f6911f477a3ca1a8d555327ad58f9df"
  },
  {
    "url": "pages/8c71af/index.html",
    "revision": "74dcaa790b5797c7a7a95efd3ae2e6bb"
  },
  {
    "url": "pages/937ff5/index.html",
    "revision": "29bff0f5b80181eef7c5c109c190daf1"
  },
  {
    "url": "pages/94823a/index.html",
    "revision": "fe8bf97a9e5932e953a9c36616d69a68"
  },
  {
    "url": "pages/9925ff/index.html",
    "revision": "cf00ff6b0f1a2bc1008eb65a35f91a9d"
  },
  {
    "url": "pages/9b3747/index.html",
    "revision": "55f678497290652b192974f3b397e5ca"
  },
  {
    "url": "pages/9c2189/index.html",
    "revision": "27b7f9ac4408a03e03e398fcbb042129"
  },
  {
    "url": "pages/9c228e/index.html",
    "revision": "1133bbaa75c968090610bc1b30fd9fec"
  },
  {
    "url": "pages/9cb9f3/index.html",
    "revision": "8f5a9b40caca83354aa12008579366ba"
  },
  {
    "url": "pages/9d4a22/index.html",
    "revision": "e0fbbd28e5fe6cc66a5162e32849ecd1"
  },
  {
    "url": "pages/a23606/index.html",
    "revision": "0c0d48a40ae15a78c74641cb515eb4ca"
  },
  {
    "url": "pages/a291c6/index.html",
    "revision": "f19659d855434b9d638e2c1d7c7b7c81"
  },
  {
    "url": "pages/a3c122/index.html",
    "revision": "665ccca4b8b45f7054796256f3d19503"
  },
  {
    "url": "pages/a7d8df/index.html",
    "revision": "4f0d105089e38f4ccb82e5deb5cd27ea"
  },
  {
    "url": "pages/a8ded8/index.html",
    "revision": "ae9fa2fe3f7f0df2ad5cd443066c547c"
  },
  {
    "url": "pages/aa4305/index.html",
    "revision": "1bee60f43d6fb3e45f689c709cd4618c"
  },
  {
    "url": "pages/ab6ea4/index.html",
    "revision": "153614e750950f18cda10bc4454e378c"
  },
  {
    "url": "pages/b72d93/index.html",
    "revision": "4b0793513fa7f40eff42e3986eef9f1f"
  },
  {
    "url": "pages/b9fa44/index.html",
    "revision": "27c5d074cd8431a3248001d1e6e8f29b"
  },
  {
    "url": "pages/c04e0c/index.html",
    "revision": "e046535bf13a1524029c83e501692316"
  },
  {
    "url": "pages/c127de/index.html",
    "revision": "9cfa8a9b56d8b6933be030f865ac3f6a"
  },
  {
    "url": "pages/c56d05/index.html",
    "revision": "2a71497ca04e8a9bbe6a5b8d7b53adfb"
  },
  {
    "url": "pages/dbc40d/index.html",
    "revision": "5ce1aaf6ca6b0f4a8fc1209ebbfeab5a"
  },
  {
    "url": "pages/dbc68b/index.html",
    "revision": "536a07bcf3b4f140e06cddbcc7802e3b"
  },
  {
    "url": "pages/dc5ce1/index.html",
    "revision": "c04355012f7d2f71183c130b5f78217c"
  },
  {
    "url": "pages/e3ff90/index.html",
    "revision": "6700b7fcc8ec9cbd4d5828a4491add55"
  },
  {
    "url": "pages/e79e98/index.html",
    "revision": "6b729f80ac35703ad42d446e37a23477"
  },
  {
    "url": "pages/eaeb0d/index.html",
    "revision": "b093df53ff38107d95ceaa05a64ee5b5"
  },
  {
    "url": "pages/eb1799/index.html",
    "revision": "cafadd07026d66e5f4211698d69fccd6"
  },
  {
    "url": "pages/eea94d/index.html",
    "revision": "b97221e2492e3abfeb3189cf45679dda"
  },
  {
    "url": "pages/f01e08/index.html",
    "revision": "5f6e1293228aa236a3d44bfa276da34b"
  },
  {
    "url": "pages/f4fe76/index.html",
    "revision": "e8fed65a001c7a27f1c20fcf1433eeeb"
  },
  {
    "url": "pages/fe46ec/index.html",
    "revision": "a853b575918f4bb82cd06b30a69b69af"
  },
  {
    "url": "pages/febfed/index.html",
    "revision": "15b117cae57861a1a76ef0ef19ebbb18"
  },
  {
    "url": "python/index.html",
    "revision": "8fab4e53a5221768bb64c994e8fb7077"
  },
  {
    "url": "tags/index.html",
    "revision": "66b095aeba88f53899263a95a21ff578"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
