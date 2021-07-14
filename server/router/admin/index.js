const Router = require('koa-router');
const adminRouter = new Router();
const { sendResponse } = require('../../utils/tools');
const jwt = require('jsonwebtoken'); // 用于生成token

// login
adminRouter.post('/login', async(ctx) => {
    const { username, password } = ctx.request.body;
    const sql = `select * from user where username='${username}'`;
    const result = await sendResponse(sql);
    if(result && result.length > 0){ // 存在该用户
        result.password = '';
        const params = Object.assign({}, result);
        const token = jwt.sign(params, 'secret', { expiresIn: 24 * 60 * 60})
        if(password === result[0].password){
            ctx.body = token;
        }
    }
})

// dashboard
adminRouter.get('/dashboard', async(ctx) => {
    console.log(ctx, ctx.body, ctx.body === ctx.request.body, ctx.body === ctx.response.body);
    ctx.body = 'this is admin dashboard'
})

// form

adminRouter.post('/jobs/insert', async(ctx) => {
    const { category, title, startTime, endTime, responsibilityHtmlText, requirementHtmlText, author } = ctx.request.body;
    const date = `${startTime}~${endTime}`;
    const responsibility = responsibilityHtmlText;
    const requirement = requirementHtmlText;
    const sql = `insert into jobs (id, category, title, date, responsibility, requirement, author) 
        values (1, '${category}', '${title}', '${date}', '${responsibility}', '${requirement}', '${author}')`;
    const result = await sendResponse(sql);
    if(result){
        ctx.body = {
            status: 200,
            ext: '',
            msg: 'insert success'
        }
    }
})


module.exports = adminRouter;
