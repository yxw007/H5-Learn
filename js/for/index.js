
let rect = { width: 1, height: 2 }
for (const key in rect) {
	console.log(rect[key], key);
}

let a = "1111";
let b = { [a]: 123 };

console.log(b);
