var a = "a";
{
	console.log(this.a);
}

let b = "b";
function fn1() {
	console.log(this.b);
}
fn1();

function fn2() {
	console.log(this == window);
}
const obj = "xx";
fn2.call(obj);
