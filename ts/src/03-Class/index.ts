import 'reflect-metadata';

function LogClass(target: Function) {
  console.log(`Class LogClass ${target?.name} was defined.`);
}

function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(`Method LogMethod ${target?.name} ${key} was called.`);
}

function DefaultValue(value: any) {
  console.log("Property DefaultValue was called.");
  return (target: any, key: string) => {
    console.log(`Property DefaultValue ${target?.name} function  was called.`);
    target[key] = value;
  };
}

function Log(message: any) {
  console.log("Log was called.");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    Reflect.defineMetadata('log:message', message, target, propertyKey);
  };
}

//! 类装饰：类被定义时就会自动调用LogClass function
@LogClass
class MyClass {
  constructor() {
    this.myProperty = 10;
  }

  //! 装饰器：方法在被定义时自动调用LogMethod
  @LogMethod
  myMethod() {
    console.log("Inside myMethod.");
  }

  //! 在此添加装饰器，就相当于调用装饰器方法，如果装饰返回返回一个函数，就会自动调用这个函数
  @Log("this is a log message")
  someMethod() {
    console.log("Inside someMethod.");
  }

  //! 属性装饰器：方法在被定义时自动调用DefaultValue
  @DefaultValue(42)
  myProperty: number;
}

let instance = new MyClass();
instance.myMethod();
instance.someMethod();

console.log(Reflect.getMetadata('log:message', instance, 'someMethod'));

console.log(instance.myProperty);
