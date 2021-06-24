const path = require('path');
const Koa = require('koa2');
const router = require('./router');
const cors = require('koa2-cors');
const static = require('koa-static');
const app = new Koa();
const port = 5555;
const db = require('./utils/mysql');

app.use(cors()); // 设置允许跨域
app.use(static(path.join(__dirname, '/static'))); // 设置访问静态资源文件

app.use(async(ctx, next) => {
    await next();
    const { status } = ctx;
    if(parseInt(status) === 404){
        ctx.response.redirect('/404');
    }else if(parseInt(status) === 500){
        ctx.response.redirect('/500');
    }
})

// router.routes 启动路由，router.allowedMethods 允许任何请求（get/post/put）
app.use(router.routes(), router.allowedMethods());

app.listen(port, () => {
    console.log(`The koa server is starting success, the listen port is ${port}!`);
})
