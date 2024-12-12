// 定义一个简单的装饰器函数
function logExecution(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Executing ${propertyKey} with arguments: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    console.log(`Executed ${propertyKey} and returned: ${result}`);
    return result;
  };

  return descriptor;
}

class ExampleClass {
  // 使用自定义装饰器装饰一个方法
  @logExecution
  public exampleMethod(arg1: number, arg2: number): number {
    return arg1 + arg2;
  }
}

// 测试装饰器
const example = new ExampleClass();
example.exampleMethod(1, 2);
