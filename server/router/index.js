const Router = require('koa-router');
const router = new Router();

router.get('/', async(ctx) => {
    ctx.response.body = 'hello koa';
})
router.get('/list', async(ctx) => {
    ctx.response.body = 'hello list';
})

module.exports = router;
