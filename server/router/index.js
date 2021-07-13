const Router = require('koa-router');
const bodyParser = require('koa-bodyparser'); // 用于获取post提交数据
const router = new Router();
const adminRouter = require('./admin');
const webRouter = require('./web');


router.use(bodyParser());

router.get('/', async(ctx) => {
    ctx.body = 'hello koa'
})

// 前端后台访问接口
router.use('/api/admin', adminRouter.routes(), adminRouter.allowedMethods());

// 前端web访问接口
router.use('/api/web', webRouter.routes(), webRouter.allowedMethods());

module.exports = router;
