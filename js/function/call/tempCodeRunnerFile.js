Function.prototype.call = function (context) {
	context = context ? Object.create(context) : globalThis; //! node环境根作用域this 就是globalthis, browser 环境就是window
	context.fn = this;
	console.log(arguments);
}