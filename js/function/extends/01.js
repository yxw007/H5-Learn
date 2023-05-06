function Animal(age) {
  this.age = age;
}

function People(name, age) {
  Animal.call(this, age);
  this.name = name;
}

function inheritProtoType(superType, subType) {
  /* let t = new Object();
  t.prototype = superType; */
  //! 以上两句等价这句
  let t = Object.create(superType.prototype);

  subType.prototype = t;
  subType.prototype.constructor = subType;
}

inheritProtoType(Animal, People);

let p = new People("pt", 18);
console.log(p.age);
console.log(p.name);
