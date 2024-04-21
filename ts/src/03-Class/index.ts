function LogClass(target: Function) {
  console.log(`Class ${target.name} was defined.`);
}

function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(`Method ${key} was called.`);
}

function DefaultValue(value: any) {
  return (target: any, key: string) => {
    target[key] = value;
  };
}

//! 类装饰：new MyClass 时会自动调用LogClass function
@LogClass
class MyClass {
  constructor() {
    this.myProperty = 10;
  }

  //! 装饰器：调用myMethod时，会自动调用LogMethod
  @LogMethod
  myMethod() {
    console.log("Inside myMethod.");
  }

  //! 属性装饰器
  @DefaultValue(42)
  myProperty: number;
}

let instance = new MyClass();
instance.myMethod();
console.log(instance.myProperty);
