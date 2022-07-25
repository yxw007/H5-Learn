const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const convert = require('koa-convert');
const bodyParser = require('koa-better-body');
const app = new Koa();

const storeDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(storeDir)) {
	fs.mkdirSync(storeDir);
}

app.use(convert(bodyParser({
	uploadDir: storeDir,
	keepExtensions: true
})));

app.use(async (ctx) => {
	if (ctx.method == 'GET') {
		ctx.set('Content-Type', 'text/html;charset=utf-8');
		ctx.body = (
			`
            <form method="POST" enctype="multipart/form-data">
               <input name="username" >
               <input name="avatar" type="file" >
               <input type="submit">
            </form>
            `
		);
	} else if (ctx.method == 'POST') {
		ctx.set('Content-Type', 'application/json');
		console.log(ctx.request.fields);
		// ctx.body = ctx.request.body;
		ctx.body = "success";
	} else {
		ctx.body = 'Not Allowed';
	}
});

app.listen(3000, () => {
	console.log('server is starting at port 3000');
});
