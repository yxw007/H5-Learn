function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

function Student(name, school) {
  const person = new Person(name);
  Object.setPrototypeOf(student, Person.prototype);
  student.school = school;
  return student;
}

const student = new Student("John", "Harvard");
student.sayHello(); // Hello, my name is John
