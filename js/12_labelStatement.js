/**
 * 创建日期: 2022-04-23
 * 文件名称：12_labelStatement.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：标签语句
 */

const array = [1, 2]
start: for (let index = 0; index < array.length; index++) {
	console.log(array[index]);
}

xx: function a() {
	console.log("a")
}

a();
