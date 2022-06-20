/**
 * 创建日期: 2022-06-18
 * 文件名称：test.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const { autoRun } = require("../../helper");
const { myCreate } = require("./create");

autoRun("1.创建一个原型为null的对象", () => {
	const ret = Object.create(null);
	console.log(ret);

	const myCreateRet = myCreate(null);
	console.log(myCreateRet);
});


autoRun("2.创建一个指定原型的对象", () => {
	function Animation(name, age) {
		this.name = name;
		this.age = age;
	}

	const ani = new Animation("小狗", 2);
	const ret = Object.create(ani);//! 说明：此处是传一个对象，而不是传方法
	console.log(ret);

	const myCreateRet = myCreate(ani);
	console.log(myCreateRet);
});

autoRun("3.创建一个指定原型的对象 + propertiesObject", () => {
	function Animation(name, age) {
		this.name = name;
		this.age = age;
	}

	const ani = new Animation("小狗", 2);
	const ret = Object.create(ani, {
		address: {
			writable: true,
			configurable: true,
			enumerable: true,
			value: 'sz'
		}
	});

	console.log(ret);

	const myCreateRet = myCreate(ani, {
		address: {
			value: "sz",
			writable: true,
			enumerable: true,//! 打开此属性才能让其日志中把此字段输出
			configurable: true
		}
	});
	console.log(myCreateRet);
});

