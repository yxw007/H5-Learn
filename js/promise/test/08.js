const Promise = require('../Promise');
Promise.resolve().then(() => {
	console.log(1);
	return Promise.resolve('k'); //x = new promise -> x.then
}).then((res) => {
	console.log(res)
})

Promise.resolve().then(() => {
	console.log(2);
}).then(() => {
	console.log(3);
}).then(() => {
	console.log(4);
}).then(() => {
	console.log(5);
})

/* 
[1,2] 
==>1
[2,k,3]
==>2
[k,3]
==>
[3,k.then]
==>3
[k.then,4]
==>k
[4,5]
==>4
[5]
==>5
*/


