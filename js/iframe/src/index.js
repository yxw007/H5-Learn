/**
 * 创建日期: 2024-03-15
 * 文件名称：index.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：iframe 数据流，实时通讯demo
 * 缺点：浏览器图标会一直转圈
 */

const express = require("express");
const app = express();

app.get("/iframe/toIframePage", (req, res) => {
  res.sendFile(__dirname + "/iframe.html"); // 返回包含 iframe 的 HTML 页面
});

app.get("/iframe/index", (req, res, next) => {
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>iframe长轮询</title>
</head>
<body>
 	<iframe src="/iframe/message" width="300" height="200" frameborder="0"></iframe>
	<h1 id="clock"></h1>
</body>
</html>
`);
  next();
});

app.get("/iframe/message", (req, res) => {
  res.set({
    "Cache-Control": "no-cache",
    "Content-Type": "text/html",
    Connection: "keep-alive",
  });

  let count = 0;

  const interval = setInterval(() => {
    count++;
    res.write(`
				<script>
				var scripts = document.querySelectorAll('script');
				scripts.forEach((script) => {
  				script.parentNode.removeChild(script);
				});
				window.parent.document.getElementById('clock').innerText = ${count};
				</script>`);
  }, 1000);

  req.on("close", () => {
    clearInterval(interval);
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
