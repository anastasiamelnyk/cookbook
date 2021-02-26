const path = require('path');
const postcssNormalize = require("postcss-normalize");

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: () => [postcssNormalize()]
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('~src', path.join(__dirname, 'src/'))
      .set('~components', path.join(__dirname, 'src/components'))
      .set('~features', path.join(__dirname, 'src/features'))
      .set('~assets', path.join(__dirname, 'src/assets'))
      .set('~views', path.join(__dirname, 'src/views'))
  }
};
