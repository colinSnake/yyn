const path = require('path');
const Koa = require('koa2');
const router = require('./router');
const cors = require('koa2-cors');
const serve = require('koa-static');
const koaBody = require('koa-body');
const app = new Koa();
const port = 5555;
const db = require('./utils/mysql');
const { readFile } = require('./utils/tools');

app.use(cors()); // 设置允许跨域
app.use(serve(path.join(__dirname, '/static'))); // 设置访问静态资源文件
// 处理文件上传
app.use(koaBody({
    // 支持文件格式
    multipart: true,
    formidable: {
        // 上传目录
        uploadDir: path.join(__dirname, 'static/images'),
        // 保留文件扩展名
        keepExtensions: true,
    }
}));

app.use(async(ctx, next) => {
    await next();
    const { status, url } = ctx;
    if(url.indexOf('static') > -1){
        readFile(ctx);
    }else if(parseInt(status) === 404){
        ctx.response.redirect('/404');
    }else if(parseInt(status) === 500){
        ctx.response.redirect('/500');
    }
    console.log(ctx.url);
})

// router.routes 启动路由，router.allowedMethods 允许任何请求（get/post/put）
app.use(router.routes(), router.allowedMethods());

app.listen(port, () => {
    console.log(`The koa server is starting success, the listen port is ${port}!`);
})
