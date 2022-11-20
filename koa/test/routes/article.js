
const Router = require("@koa/router");
const router = new Router();

router.get('/', function (ctx, next) {
	ctx.body = 'article';
})
router.get('/add', function (ctx, next) {
	ctx.body = 'article add';
})
router.get('/remove', function (ctx, next) {
	ctx.body = 'article remove';
})

module.exports = router
