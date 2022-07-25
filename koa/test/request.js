const Koa = require('koa');
const app = new Koa();

//说明：启动server后，访问如下地址
//http://localhost:3000/a/b?p1=123&p2=ds

app.use(async (ctx) => {
	//获取请求方法: get
	console.log(ctx.method);

	//获取请求URL：/a/b?p1=123&p2=ds
	console.log(ctx.url);

	//获取解析的查询字符串对象：{ p1: '123', p2: 'ds' }
	console.log(ctx.query);

	//根据 ? 获取原始查询字符串：p1=123&p2=ds
	console.log(ctx.querystring);

	//获取请求头对象
	console.log(ctx.headers);
	ctx.body = ctx.url;
});

app.listen(3000, () => {
	console.log('server is starting at port 3000');
});
