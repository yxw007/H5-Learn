function Animal(name){
    this.name = name;
    this.arr = [1,2,3];
}

function Tiger(name){
    this.name = name;
}

Animal.prototype.address = {location:"山里"};
let a1 = new Animal("猴子");
let a2 = new Animal("鸭子");
console.log(a1.arr === a2.arr);
console.log(a1.address === a2.address);
console.log(a1.__proto__ === Animal.prototype);
console.log(a1.constructor === Animal);

console.log(Animal.__proto__ === Function.prototype);
console.log(a1.__proto__.__proto__ === Object.prototype);
console.log(Animal.prototype.__proto__ === Object.prototype);
// console.log(Animal.prototype.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__);

//TODO: 查看class 类定义属性，查看原型情况

// class Person {
//     name:"123";
//     say(params) {
//         console.log("说话");
//     }
// }