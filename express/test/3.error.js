// const express = require("express");
const express = require("../express");
const app = express();

//! 说明：/ 匹配任意路径
app.use("/", (req, res, next) => {
	console.log(1);
	next();
	console.log(2);
});

app.get("/user/a", (req, res, next) => {
	console.log(3);
	//! next 传递参数就相当于传递了error，然后想底层传递，就会导致后面相同的路由不会走，直接跳至error 处理中间件
	//1.next传递error，输出结果：1,3,7,4,2
	next("occur error");

	//2.next不传参数,输出结果: 1,3,5,6,4,2
	// next();

	console.log(4);
});

app.get("/user/a", (req, res, next) => {
	console.log(5);
	next();
	console.log(6);
});

app.use((error, req, res, next) => {
	console.log(7);
	res.end(`error:${error}`);
});

app.listen(3000, () => {
	console.log("start server 3000");
});
