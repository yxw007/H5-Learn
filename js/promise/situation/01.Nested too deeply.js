const fs = require("fs/promises");
const path = require("path");

(() => {
	fetchUserInfo(res => {
		console.log(res);
	});

	/*
	! 说明：模拟请求用户信息过程，为了简化流程直接通过文件的方式来模拟此过程
	*/
	function fetchUserInfo(callback) {
		fs.readFile(path.resolve(__dirname, "./res/id.json"), "utf-8", (error, data) => {
			fs.readFile(path.resolve(__dirname, "./res/useInfo.json"), "utf-8", (error, data) => {
				let userInfo = JSON.parse(data);
				callback(userInfo);
			});
		});
	}
})();


