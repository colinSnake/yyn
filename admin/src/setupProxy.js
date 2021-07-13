const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy('/api',{
            target: 'http://localhost:5555',
            changeOrigin: true,
            pathRewrite: { '^/api' : '' } // 重写请求路径
        })
    )
}
