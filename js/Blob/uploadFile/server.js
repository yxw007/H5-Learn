const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();

const whiteList = [
	"http://localhost:4000"
];

app.use((ctx, next) => {
	const { req, res } = ctx;
	const origin = req.headers.origin;
	console.log("origin:", origin);
	if (whiteList.includes(origin)) {
		// 设置哪个源可以访问我
		res.setHeader('Access-Control-Allow-Origin', origin);
		// 允许携带哪个头访问我
		res.setHeader('Access-Control-Allow-Headers', 'name');
		// 允许哪个方法访问我
		res.setHeader('Access-Control-Allow-Methods', 'POST');
		// 允许携带cookie
		res.setHeader('Access-Control-Allow-Credentials', true);
		// 预检的存活时间
		res.setHeader('Access-Control-Max-Age', 864000);
		// 允许返回的头
		res.setHeader('Access-Control-Expose-Headers', 'name');
		if (req.method === 'OPTIONS') {
			//! 说明：此处要return 掉，后缀会导致执行next 然后再次运行的底层处理逻辑导致报错：Cannot set headers after they are sent to the client
			return res.end();
		}
	}
	next();
});

/* app.use(koaBody({
	multipart: true,
	formidable: {
		maxFileSize: 200 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
	}
})); */

app.use(koaBody({
	formidable: {
		//设置文件的默认保存目录，不设置则保存在系统临时目录下  os
		// uploadDir: path.resolve(__dirname, '../static/uploads')
	},
	// 支持文件上传
	multipart: true
}));

app.use(async (ctx) => {
	// await next();
	/* if (ctx.path === '/ajax') {
		const body = ctx.request.body;
		console.log(body);
		console.log('---------------');
		// return ctx.body = "success";
		ctx.response.status = 200;
		ctx.body = "success";
		// await next();
	}
	console.log('the response status is ', ctx.status); */

	ctx.set('Content-Type', 'application/json');
	console.log(ctx.request.fields);
	ctx.body = ctx.request.body;
	console.log(ctx.body);
});

/* app.use(async function (ctx) {
	const body = ctx.request.body;
	console.log(body);
	console.log('---------------');
	ctx.body = 'Hello World';
});
 */
app.listen(3000, () => {
	console.log("server start success ,port 3000")
});
