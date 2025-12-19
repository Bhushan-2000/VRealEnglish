
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Bhushan-2000.github.io/VRealEnglish/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "preload": [
      "chunk-GTJU7B3G.js"
    ],
    "route": "/VRealEnglish"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BAO4BWVV.js"
    ],
    "route": "/VRealEnglish/courses"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-ETH52TJO.js"
    ],
    "route": "/VRealEnglish/module360"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MD75PS4Q.js"
    ],
    "route": "/VRealEnglish/live"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-AFRU3EOU.js"
    ],
    "route": "/VRealEnglish/learning"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-AFRU3EOU.js"
    ],
    "route": "/VRealEnglish/learning/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Z7NLG3CO.js",
      "chunk-VKL2DIP3.js"
    ],
    "route": "/VRealEnglish/community"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-7ANV22NZ.js"
    ],
    "route": "/VRealEnglish/rooms"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5IDYPNZ6.js"
    ],
    "route": "/VRealEnglish/ai-coach"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RUVS4OGT.js",
      "chunk-VKL2DIP3.js"
    ],
    "route": "/VRealEnglish/wallet"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WDS77BN6.js"
    ],
    "route": "/VRealEnglish/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-DM77GMFG.js"
    ],
    "route": "/VRealEnglish/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SMTZ4B3V.js"
    ],
    "route": "/VRealEnglish/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12497, hash: '43b095cfdb6d94c32a386c9516045832afecb5f87eb3b6fe0efc66db4e2c3aec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1164, hash: 'be493675306fb54eeacc30e0348e79db39cd23070148782d66c0dc303444074b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-L37CUN52.css': {size: 17492, hash: 'SrrUxHETrPI', text: () => import('./assets-chunks/styles-L37CUN52_css.mjs').then(m => m.default)}
  },
};
