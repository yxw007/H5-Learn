let handler = {
	get: function (target, key, receiver) {
		let value = Reflect.get(target, key, receiver)
		console.log(`getting key "${key}": ${value}`)
		return value;
	},
	set: function (target, key, value, receiver) {
		let oldValue = Reflect.get(target, key, receiver);
		const result = Reflect.set(target, key, value, receiver);
		console.log(`setting key "${key}": ${oldValue} -> ${value}  result:${result}`)
		return result
	}
}

let list = ["a"];
let reactiveObj = new Proxy({ list }, handler);
reactiveObj.list = [];
