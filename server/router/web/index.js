const Router = require('koa-router');
const webRouter = new Router();

// 
webRouter.get('/home', async(ctx) => {
    ctx.body = 'This web home'
})


module.exports = webRouter;