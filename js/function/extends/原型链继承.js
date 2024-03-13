//原型链继承
function Parent() {
  this.parentPrototype = "parent prototype";
  //验证这种继承方法的确定，如果父类示例中存在一个引用类型的属性，将会被所有子类共享
  this.parentObj = {
    info: "我是 parent 引用属性parentObj中的 info",
  };
}

function Children() {}
//将Children的原型对象指定为Parent的示例，通过原型链，将Parent中的属性赋值给Children示例
Children.prototype = new Parent();

const a = new Children();
console.log(a.parentPrototype); // parent prototype

//缺点
const b = new Children();
//在a示例中改动继承的引用属性
a.parentObj.info = "我是a示例中 引用属性parentObj中的 info";
//b与a示例共享引用属性
console.log(b.parentObj.info); // 我是a示例中 引用属性parentObj中的 info

/* 
优点：实现简单
缺点：
1.父类引用实例属性，被子类实例共享，只要一个子类实例就改其父类实例属性，其他子类实例都改了
2.创建子类实例时，无法给父类构造函数传参
*/
