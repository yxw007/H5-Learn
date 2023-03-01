/* 
!优点：能够快速区分基本数据类型
!缺点：不能将Object、Array和Null区分，都返回object
*/

console.log(typeof 1); // number
console.log(typeof true); // boolean
console.log(typeof "mc"); // string
console.log(typeof Symbol); // function
console.log(typeof function () {}); // function
console.log(typeof console.log); // function
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
