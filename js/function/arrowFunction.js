globalThis.lives = 10;
function test() {
  var dog = {
    lives: 20,
    jumps: () => {
      console.log("jumps1: ", this.lives);
      //! 箭头函数没有this指向，所以this指向外部函数的this
      this.lives--;
      console.log("jumps2: ", this.lives);
    },
  };
  console.log(dog.jumps());
  console.log(dog.lives);
}

test();
//-------------------------------------------------------------------------
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.forEach((student) => console.log(this.title + ": " + student));
  },
};
group.showList();
