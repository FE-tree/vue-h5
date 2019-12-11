const path = require('path')
const name = 'VueH5' // page title

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        port: 6666,
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
}
