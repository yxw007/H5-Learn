/**
 * 创建日期: 2022-06-18
 * 文件名称：test.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

const { autoRun } = require("../../helper");


autoRun("1.创建一个原型为null的对象", () => {
	const ret = Object.create(null);
	console.log(ret);
});


autoRun("2.创建一个指定原型的对象", () => {
	function Animation(name, age) {
		this.name = name;
		this.age = age;
	}

	const ani = new Animation("小狗", 2);
	const ret = Object.create(ani);//! 说明：此处是传一个对象，而不是传方法
	console.log(ret);
});

//TODO: 学习到此处?
