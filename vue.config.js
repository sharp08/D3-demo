const path = require("path")

module.exports = {
  lintOnSave: false,
  // less 5 以上的版本使用
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'less',
  //     patterns: [path.resolve(__dirname, "src/assets/less/global.less")] // 引入全局样式变量
  //   }
  // },
  // less 5 的版本使用
  css: {
    loaderOptions: {
      less: {
        globalVars: {
          hack: `true; @import '~@/assets/less/global.less';`
        },
        javascriptEnabled: true
      }
    }
  },
}
