const path = require('path')
const name = 'VueH5' // page title

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        host: '0.0.0.0', // 允许外部ip访问
        port: 8686,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        }
    },
    css: {
        loaderOptions: {
          sass: {
            // 旧版sass-loader
            // data: `@import "~@style/global.scss";`     
            // 新版sass-loader
            prependData: `@import "~@style/_global.scss";@import "~@style/_mixin.scss";` // 全局引入
          },
          postcss: {
            plugins: [
              require('postcss-pxtorem')({ // 把px单位换算成rem单位
                rootValue: 32, // 换算的基数(设计图750的根字体为32)
                // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                propList: ['*']
              })
            ]
          }
        }
    },
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src'), // 主目录
                '@views': resolve('src/views'), // 页面
                '@c': resolve('src/components'), // 组件
                '@api': resolve('src/api'), // 接口
                '@utils': resolve('src/utils'), // 通用功能
                '@assets': resolve('src/assets'), // 静态资源
                '@style': resolve('src/style') // 通用样式
            }
        }
    },
    chainWebpack(config) {
        // set svg-sprite-loader
        config.module
          .rule('svg')
          .exclude.add(resolve('src/icons'))
          .end()
        config.module
          .rule('icons')
          .test(/\.svg$/)
          .include.add(resolve('src/icons'))
          .end()
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId: 'icon-[name]'
          })
          .end()
    }
}
