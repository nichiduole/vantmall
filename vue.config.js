module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://v.juhe.cn/toutiao/index',
        port: 4000,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
