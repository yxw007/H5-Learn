/**
 * 创建日期: 2022-06-27
 * 文件名称：clone.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：实现一个deepClone 方法
 */
const { autoRun } = require('../helper')

function deepClone(data) {
	if (typeof data !== 'object') {
		return Object(data);
	}

	let keys = Object.keys(data);
	let ret = {};
	for (const key of keys) {
		let value = data[key];
		if (typeof value === 'object') {
			ret[key] = deepClone(value);
		} else {
			ret[key] = value;
		}
	}

	return ret;
}

autoRun("1.普通类型 Number", () => {
	let data = 123;
	let clone = deepClone(data);
	console.log(clone);
	console.log("data===clone,", data === clone);
});

autoRun("2.普通类型 String", () => {
	let data = "123";
	let clone = deepClone(data);
	console.log(clone);
	console.log("data===clone,", data === clone);
});

autoRun("2.对象类型", () => {
	let address = {
		province: "xx",
		region: "abc"
	};
	let data = {
		name: "123",
		address
	};
	let clone = deepClone(data);
	console.log(clone);
	console.log("data===clone,", data === clone);
});


