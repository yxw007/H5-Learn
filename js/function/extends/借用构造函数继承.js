function Parent() {
  this.parentPrototype = "parent prototype";
  this.obj = {
    info: "parent obj info",
  };
  this.fn = function () {
    console.log("打印功能");
  };
}

function Children() {
  Parent.call(this);
}

const a = new Children();
console.log(a.parentPrototype); // parent ptototype

const b = new Children();
a.obj.info = "a obj info";

//优点 避免了子类实例共享引用属性
console.log(b.obj.info); // parent obj info;

/* 
优点：
1.避免了子类实例共享引用属性

缺点：无法给父类构造函数传参
*/
