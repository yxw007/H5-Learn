
class A {
  constructor() {
    this.name = ""
  }
}

/** @type {A} */
const a = new A();
a.name

/** @type {Array<A>} */
const arr = [];

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  element.name = "";
}
