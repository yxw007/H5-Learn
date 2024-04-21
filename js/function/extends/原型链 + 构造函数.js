function Parent() {
  this.parentPrototype = "我是Parent 中的属性";
}
//Parent中的方法，在原型上定义
Parent.prototype.pFn = function () {
  console.log("我是Parent中的方法");
};

function Children() {
  //Parent中的属性仍然在构造函数中继承
  Parent.call(this);
}
//将Children的原型对象赋值为 Parent实例，这样Parent中的方法也能够被Children继承
Children.prototype = new Parent();
const c = new Children();
console.log(c.parentPrototype); //我是Parent 中的属性
c.pFn(); //我是Parent中的方法

/* 
优点：创建子类对象，父类实例属性都独享

缺点：
1. Parent 构造函数调用了2次
*/
