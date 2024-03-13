function Person(name) {
  this.name = name;
}

function Student(name, school) {
  const person = new Person(name);
  person.school = school;
  return person;
}

const student = new Student("John", "Harvard");
console.log(student.name); // John
console.log(student.school); // Harvard
