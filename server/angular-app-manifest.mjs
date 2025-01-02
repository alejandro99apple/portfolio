
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  assets: {
    'index.csr.html': {size: 5316, hash: '2f7bb1dd44c10ffc6bac364920c8ceed76c024c9b7b16d2a4216bb18358bfadd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1198, hash: '382ddfe36a3b201a8ad90059a1e904f0d66bd6e92c0fea6cda87edfa06f416b2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 50279, hash: '22ffc4447dae8ff122d871d50e3cea77f6bd898dc303644755bd6c582f302faf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-65SVPJ5M.css': {size: 231829, hash: 'H0k2SBGD2/4', text: () => import('./assets-chunks/styles-65SVPJ5M_css.mjs').then(m => m.default)}
  },
};
