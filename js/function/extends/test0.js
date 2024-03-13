/**
 * 创建日期: 2024-03-12
 * 文件名称：test1.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：原型链继承
 */

function Person(name) {
  this.name = name;
  console.log("Person 调用了");
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

function Student(name, school) {
  //! 第2次
  Person.call(this, name);
  this.school = school;
}

//! 问题2：无法重写父类方法
Student.prototype.sayHello = function () {
  console.log("my name is " + this.name);
};

//! 第1次
Student.prototype = new Person();

//! 问题1：缺点：调用了2次Parent

const student = new Student("John", "Harvard");
student.sayHello(); // Hello, my name is John
