
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Bhushan-2000.github.io/VRealEnglish/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "preload": [
      "chunk-ME42XBP7.js"
    ],
    "route": "/VRealEnglish"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-YIFG6NI6.js"
    ],
    "route": "/VRealEnglish/courses"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-DQRJAGCD.js"
    ],
    "route": "/VRealEnglish/module360"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VDXXRE7M.js"
    ],
    "route": "/VRealEnglish/live"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5RUKITNC.js"
    ],
    "route": "/VRealEnglish/learning"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5RUKITNC.js"
    ],
    "route": "/VRealEnglish/learning/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-CZ2HXG5S.js",
      "chunk-CCFLHY6T.js"
    ],
    "route": "/VRealEnglish/community"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2LOZIB3J.js"
    ],
    "route": "/VRealEnglish/rooms"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-UPRSBPJO.js"
    ],
    "route": "/VRealEnglish/ai-coach"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-ZYNO2M2S.js",
      "chunk-CCFLHY6T.js"
    ],
    "route": "/VRealEnglish/wallet"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-R2UBIUWD.js"
    ],
    "route": "/VRealEnglish/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-D3SYMK7A.js"
    ],
    "route": "/VRealEnglish/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-22JP2JE5.js"
    ],
    "route": "/VRealEnglish/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12497, hash: 'a4655baf989e30b0c591e821aeac1c32127618d0194ce32e0d67526726951762', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1164, hash: 'b356ec54655ef6cf28787412c04ed1f4b620c9bf4fc6b340c6df0343feeb45e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-L37CUN52.css': {size: 17492, hash: 'SrrUxHETrPI', text: () => import('./assets-chunks/styles-L37CUN52_css.mjs').then(m => m.default)}
  },
};
