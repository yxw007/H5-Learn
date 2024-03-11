const obj1 = new String("hello");
const obj2 = new Number(123);
const obj3 = new Array(1, 2, 3);

class A {
  constructor() {
    console.log("A constructor");
  }
}
class B extends A {
  constructor() {
    super();
    console.log("B constructor");
  }
}

let b = new B();
console.log(obj1.constructor === String); // true
console.log(obj2.constructor === Number); // true
console.log(obj3.constructor === Array); // true

console.log(b.constructor === B.prototype.constructor);
//! 注意：constructor 只能判断直接原型的contructor，不能判断父类的原型constructor
console.log(b.constructor === A.prototype.constructor);
