console.log(Object.is(25, 24));
//! == 会强制转换类型，而Object.is 不会
console.log(Object.is("", false), "" == false); //false,true
console.log(Object.is("", 0), "" == 0); //false,true

//! Object.is 与 === 不同在正负0、NaN
console.log(Object.is(0, -0), 0 === -0); //false,true
console.log(Object.is(+0, -0), +0 === -0); //false,true

console.log(Object.is(NaN, 0 / 0), NaN === 0 / 0); //true,false
console.log(Object.is(NaN, Number.NaN), NaN === Number.NaN); //true,false
