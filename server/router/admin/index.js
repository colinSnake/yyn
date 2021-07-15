const Router = require('koa-router');
const adminRouter = new Router();
const { sendResponse } = require('../../utils/tools');
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
})

// 控制台
adminRouter.get('/dashboard', async(ctx) => {
    console.log(ctx, ctx.body, ctx.body === ctx.request.body, ctx.body === ctx.response.body);
    ctx.body = 'this is admin dashboard'
})

// 表单模块
// 发布职位接口
adminRouter.post('/jobs/insert', async(ctx) => {
    const { category, title, date, responsibilityHtmlText, requirementHtmlText, author, uid } = ctx.request.body;
    const responsibility = responsibilityHtmlText;
    const requirement = requirementHtmlText;
    const sql = `insert into jobs (category, title, date, responsibility, requirement, author, uid) 
        values ('${category}', '${title}', '${date}', '${responsibility}', '${requirement}', '${author}', ${uid})`;
    const result = await sendResponse(sql);
    if(result){
        ctx.body = {
            code: '0',
            ext: null,
            msg: 'success'
        }
    }else{
        ctx.body = {
            code: '1',
            ext: null,
            msg: 'failed'
        }
    }
})


// 表格模块
adminRouter.get('/jobs/list', async(ctx) => {
    const sql = `select * from jobs`;
    const result = await sendResponse(sql);
    if(result){
        ctx.body = {
            code: '0',
            ext: { list: result},
            msg: 'success'
        }
    }else{
        ctx.body = {
            code: '1',
            ext: null,
            msg: 'failed'
        }
    }
})


module.exports = adminRouter;
