const path = require('path');
const fs = require('fs')
const vm = require('vm')

function MyModule(id) {
	this.id = id;
	this.exports = {}
}

MyModule._extensions = {
	'.js'(module) {

		let source = fs.readFileSync(module.id);

		//! 方法1：利用vm.runInThisContext,(推荐: 安全)
		const code = `
			(function(exports,module,require,__dirname,__filename){
				${source}
			})
		`
		//字符串转成的函数
		let fn = vm.runInThisContext(code);

		//! 方法2: 利用new Function(不安全)
		// let args = '...args';
		// let body = `let [exports,module,require,__dirname,__filename] = args;${source}`;
		// let fn = new Function(args, body);

		let filename = module.id
		let dirname = path.dirname(filename)
		let exports = module.exports

		fn.call(exports, exports, module, myRequire, dirname, filename);
	},
	'.json'(module) {
		let content = fs.readFileSync(module.id);
		module.exports = JSON.parse(content)
	}
}

/**
 * 解析模块路径
 * @param {*} id 
 * @returns 
 */
MyModule.resolveFilename = function (id) {
	let filepath = path.resolve(__dirname, id);
	if (fs.existsSync(filepath)) {
		return filepath;
	}

	let extensions = Object.keys(MyModule._extensions);
	for (let i = 0; i < extensions.length; i++) {
		let fullpath = filepath + extensions[i];
		if (fs.existsSync(fullpath)) {
			return fullpath
		}
	}

	throw new Error(`not found module: ${id}`)
}

/**
 * 加载模块
 */
MyModule.prototype.load = function () {
	let extension = path.extname(this.id);
	MyModule._extensions[extension](this);
}

/* 全局的缓存区 用来缓存模块的 */
MyModule._cache = {};
function myRequire(id) {
	let filepath = MyModule.resolveFilename(id);
	if (MyModule._cache[filepath]) {
		return MyModule._cache[filepath].exports
	}

	let module = new MyModule(filepath);
	MyModule._cache[filepath] = module;
	module.load();
	return module.exports;
}

let ret = myRequire('./common.js');
console.log(ret);
