let path = require('path')

module.exports = {
  chainWebpack: config => { // 可以获取到webpack的配置，再增加一些自己的逻辑
    config.resolve.alias.set('@', path.join(__dirname, 'src')) // 配置别名 这里需要使用绝对路径，相对路径会报错
    // 必须按照下面的先清除已有的loader，再配置svg-sprite-loader
    config.module.rule('svg').uses.clear()
    config.module
      .rule('svg-smart')
      .test(/\.svg$/)
      .include
      .add(path.join(__dirname, 'src/assets/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, './src/assets/css/mixins.styl')
      ]
    }
  }
}
