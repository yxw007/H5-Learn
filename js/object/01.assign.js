
let setPerson = {
	set name(value) {
		console.log("set:name");
	}
}

let getPerson = {
	get name() {
		console.log("get:name");
		return "getPerson name"
	}
}

let result = Object.assign(setPerson, getPerson);
//! 说明：Object.assign 其实就是get值，然后再set一遍值
result.name = 10

//! 说明：对象合并的get是不会合并的
console.log(result.name);

