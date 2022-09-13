const Router = require("@koa/router");
const router = new Router();

router.get('/', function (ctx, next) {
	ctx.body = 'user';
})
router.get('/add', function (ctx, next) {
	ctx.body = 'user add';
})
router.get('/remove', function (ctx, next) {
	ctx.body = 'user remove';
})

module.exports = router;
