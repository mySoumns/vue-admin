const webpack = require('webpack')
const path = require('path')
const defaultSetting = require('./src/settings.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = defaultSetting.title || 'vue Admin Template' // 页面title
const port = process.env.port || process.env.npm_config_port || 9528 // 开发环境的端口

module.exports = {
    publicPath: '/',
    outputDir: 'dist', // 配置出口
    assetsDir: 'static', // 配置静态资源路径
    // lintOnSave: process.env.NODE_ENV === 'development', // 开发版本使用eslint
    lintOnSave:false,
    productionSourceMap: true, // 生产版本不用使用sourcemap
    // 配置开发环境服务器
    devServer: {
        port: port, // 配置端口
        open: true,
        overlay: {
          warnings: false,
          errors: true
        },
        // before: require('./mock/mock-server.js')
      },
      configureWebpack: {
        name: name,
        resolve: {
          alias: { // 配置alias
            '@': resolve('src')
          }
        }
      },
}