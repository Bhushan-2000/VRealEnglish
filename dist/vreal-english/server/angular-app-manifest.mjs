
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "preload": [
      "chunk-GTJU7B3G.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BAO4BWVV.js"
    ],
    "route": "/courses"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-ETH52TJO.js"
    ],
    "route": "/module360"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MD75PS4Q.js"
    ],
    "route": "/live"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-AFRU3EOU.js"
    ],
    "route": "/learning"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-AFRU3EOU.js"
    ],
    "route": "/learning/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Z7NLG3CO.js",
      "chunk-VKL2DIP3.js"
    ],
    "route": "/community"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-7ANV22NZ.js"
    ],
    "route": "/rooms"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5IDYPNZ6.js"
    ],
    "route": "/ai-coach"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RUVS4OGT.js",
      "chunk-VKL2DIP3.js"
    ],
    "route": "/wallet"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WDS77BN6.js"
    ],
    "route": "/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-DM77GMFG.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SMTZ4B3V.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12454, hash: 'e04b797452532ae8559240bc7efe39d59142df4bbd3edb807514b28772de2391', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1121, hash: 'b5b9ce621762a4499c7851dfb7a85652d7ec91011a8adf20995ba03c13309642', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-L37CUN52.css': {size: 17492, hash: 'SrrUxHETrPI', text: () => import('./assets-chunks/styles-L37CUN52_css.mjs').then(m => m.default)}
  },
};
