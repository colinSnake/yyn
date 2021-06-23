const Router = require('koa-router');
const router = new Router();
const db = require('../../utils/mysql');
const jwt = require('jsonwebtoken'); // 用于生成token
// login
router.get('/admin/login', async(ctx) => {
    const { username, password } = ctx.request.body;
    const sql = `select * from user where username='${username}'`;
    const result = await db.query(sql, (err, data) => {
        if(err) throw err;
        return data;
    })
    if(result && result.length > 0){ // 存在该用户
        const params = Object.assign({}, result);
        const token = jwt.sign(params, 'secret', { expiresIn: 24 * 60 * 60})
        if(password === result[0].password){
            ctx.response.body = token;
        }
    }
})

// dashboard
