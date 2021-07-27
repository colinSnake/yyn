const Router = require('koa-router');
const adminRouter = new Router();
const formidable = require('formidable');
const { sendResponse, resCallback } = require('../../utils/tools');
const jwt = require('jsonwebtoken'); // 用于生成token

// 其他模块
// 登录接口
adminRouter.post('/login', async(ctx) => {
    const { username, password } = ctx.request.body;
    const sql = `select * from user where username='${username}'`;
    const result = await sendResponse(sql);
    if(result && result.length > 0){ // 存在该用户
        result.password = '';
        const params = Object.assign({}, result);
        const token = jwt.sign(params, 'secret', { expiresIn: 24 * 60 * 60})
        if(password === result[0].password){
            ctx.body = {
                code: '0',
                ext: { token },
                msg: 'success'
            };
        }
    }else{
        ctx.body = {
            code: '1',
            ext: null,
            msg: 'failed'
        }
    }
});

// 控制台
adminRouter.get('/dashboard', async(ctx) => {
    ctx.body = 'this is admin dashboard'
});

// 图片上传
adminRouter.post('/upload', async(ctx) => {
    const filePath = ctx.request.files.file.path;
    const curFilePath = filePath.split('/server')?.length > 1 && filePath.split('/server')[1]; 
    const { size, type } = ctx.request.body;
    ctx.body = resCallback(true, {
        url: `${ctx.origin}${curFilePath}`,
        size,
        type
    });
});


// 表单模块
// 发布新闻
adminRouter.post('/news/insert', async(ctx) => {
    const { category, title, date, responsibilityHtmlText, requirementHtmlText, author, uid } = ctx.request.body;
    const responsibility = responsibilityHtmlText;
    const requirement = requirementHtmlText;
    const sql = `insert into jobs (category, title, date, responsibility, requirement, author, uid) 
        values ('${category}', '${title}', '${date}', '${responsibility}', '${requirement}', '${author}', ${uid})`;
    const result = await sendResponse(sql);
    ctx.body = resCallback(result);
});

// 发布职位接口
adminRouter.post('/jobs/insert', async(ctx) => {
    const { category, title, date, responsibilityHtmlText, requirementHtmlText, author, uid } = ctx.request.body;
    const responsibility = responsibilityHtmlText;
    const requirement = requirementHtmlText;
    const sql = `insert into jobs (category, title, date, responsibility, requirement, author, uid) 
        values ('${category}', '${title}', '${date}', '${responsibility}', '${requirement}', '${author}', ${uid})`;
    const result = await sendResponse(sql);
    ctx.body = resCallback(result);
});

// 添加子账号
adminRouter.post('/account/insert', async(ctx) => {
    const { username, password, type } = ctx.request.body;
    const sql = `insert into user (username, password, type) values ('${username}', '${password}', ${type})`;
    const result = await sendResponse(sql);
    ctx.body = resCallback(result);
});


// 表格模块
adminRouter.get('/jobs/list', async(ctx) => {
    const sql = `select * from jobs`;
    const result = await sendResponse(sql);
    ctx.body = resCallback(result, { list: result});
});


module.exports = adminRouter;
