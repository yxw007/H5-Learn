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
		fs.readFile(path.resolve(__dirname, "../res/id.json"), "utf-8", (error, data) => {
			//1
			if (error) {
				callback(error);
			}

			fs.readFile(path.resolve(__dirname, "../res/useInfo.json"), "utf-8", (error, data) => {
				//2
				if (error) {
					callback(error);
				}

				let userInfo = JSON.parse(data);
				callback(userInfo);
			});
		});
	}
})();


(() => {
	fetchUserInfo(res => {
		console.log(res);
	});

	/*
	! 说明：模拟请求用户信息过程，为了简化流程直接通过文件的方式来模拟此过程
	*/
	function fetchUserInfo(callback) {
		fs.readFile(path.resolve(__dirname, "../res/id.json"), "utf-8")
			.then((value) => {
				return value;
			})
			.then(value => {
				return fs.readFile(path.resolve(__dirname, "./res/useInfo.json"), "utf-8");
			})
			.then(value => {
				console.log(value);
			}).catch(error => {
				console.error(error);
			});
	}
})();
