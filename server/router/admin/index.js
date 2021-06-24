const Router = require('koa-router');
const adminRouter = new Router();
const { sendResponse } = require('../../utils/tools');
const jwt = require('jsonwebtoken'); // 用于生成token

// login
adminRouter.get('/login', async(ctx) => {
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

module.exports = adminRouter;
