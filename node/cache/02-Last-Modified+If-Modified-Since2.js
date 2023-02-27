const express = require("express");
const CryptoJS = require("crypto-js/crypto-js");
const fs = require("fs");
const app = express();
var options = {
  etag: true, // 只通过Etag来判断
  lastModified: false, // 关闭另一种协商缓存
  setHeaders: (res, path, stat) => {
    const data = fs.readFileSync(path, "utf-8"); // 读取文件
    const hash = CryptoJS.MD5(JSON.stringify(data)); // MD5加密
    res.set({
      "Cache-Control": "max-age=00", // 浏览器不走强缓存
      Pragma: "no-cache", // 浏览器不走强缓存
      ETag: hash, // 手动设置Etag值为MD5加密后的hash值
    });
  },
};
app.use(express.static(__dirname + "/public", options));
app.listen(4000); // 使用新端口号，否则上面验证的协商缓存会一直存在
