class Animal {
  constructor(age) {
    this.age = age;
  }
}

class People extends Animal {
  constructor(name, age) {
    super(age);
    this.name = name;
    this.play = function () {};
  }
}

People.prototype.work = function () {};

let t = new People("pt", 18);
Object.defineProperty(t, "sex", {
  value: "boy",
  enumerable: false,
});

//! 获取可枚举的属性key
console.log(Object.keys(t));
//! 获取所有属性key，包括可枚举和不可枚举的属性, 不会获取原型上的属性
console.log(Object.getOwnPropertyNames(t));

//! enties 与keys类似
for (const [key, value] of Object.entries(t)) {
  console.log(`${key}: ${value}`);
}

console.log("--------------");
//! for in 会获取可枚举的当前对象和原型链上的属性，可通过hasOwnProperty排除掉原型连上的属性和方法
for (key in t) {
  console.log(`${key}: ${t[key]}`);
}
console.log("--------------");
for (key in t) {
  if (t.hasOwnProperty(key)) {
    console.log(`${key}: ${t[key]}`);
  }
}
