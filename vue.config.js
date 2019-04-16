let path = require('path');

module.exports = {
  chainWebpack: config => { // 可以获取到webpack的配置，再增加一些自己的逻辑
    config.resolve.alias.set('@', path.join(__dirname, 'src')); // 配置别名 这里需要使用绝对路径，相对路径会报错
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, './src/assets/css/mixins.styl')
      ]
    }
  }
};
