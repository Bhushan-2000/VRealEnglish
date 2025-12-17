
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Bhushan-2000.github.io/VRealEnglish/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "preload": [
      "chunk-JF3UDETV.js"
    ],
    "route": "/VRealEnglish"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OQMSOWIP.js"
    ],
    "route": "/VRealEnglish/courses"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-NGQY6W24.js"
    ],
    "route": "/VRealEnglish/module360"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MJT6ZWLF.js"
    ],
    "route": "/VRealEnglish/live"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-W5PLIJ4G.js"
    ],
    "route": "/VRealEnglish/learning"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-W5PLIJ4G.js"
    ],
    "route": "/VRealEnglish/learning/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5HSO5NPC.js",
      "chunk-Q6GL625W.js"
    ],
    "route": "/VRealEnglish/community"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MFBVBS6N.js"
    ],
    "route": "/VRealEnglish/rooms"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WTQL6UUZ.js"
    ],
    "route": "/VRealEnglish/ai-coach"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-KADFF4VQ.js",
      "chunk-Q6GL625W.js"
    ],
    "route": "/VRealEnglish/wallet"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-DO43M6LL.js"
    ],
    "route": "/VRealEnglish/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VSTE6QWN.js"
    ],
    "route": "/VRealEnglish/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5XJDXE53.js"
    ],
    "route": "/VRealEnglish/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12497, hash: '443fb5e172a53b04927833925f3cfbb448f826ba5a05a5da15a0778ab5ec8984', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1164, hash: '04d453666dc3a8b24588f04360d02e3c2dea020dcf8c975c3776ae4a99d6a320', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-L37CUN52.css': {size: 17492, hash: 'SrrUxHETrPI', text: () => import('./assets-chunks/styles-L37CUN52_css.mjs').then(m => m.default)}
  },
};
