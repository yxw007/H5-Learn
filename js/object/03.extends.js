function SuperType(no) {
	this.property = true;
	this.no = no;
	this.superName = () => {
		return "superName";
	}

	this.getSuperValue = () => {
		return "this.getSuperValue";
	}
}

SuperType.prototype.getSuperValue = function () {
	return this.property;
}

function SubType(name) {
	//! 说明：在子类构造函数中调用父类构造方法，解决：多个子类实例引用同一个父类实例问题
	SuperType.call(this, name);
	this.subProperty = false;
}

SubType.prototype = new SuperType(1);
SubType.prototype.GetSubProperty = () => {
	return this.subProperty;
}

let instance = new SubType();
console.log(instance.getSuperValue());
console.log(instance.superName());
console.log(instance.no);

let instance2 = new SubType();
console.log(instance2.no);

//! 属性访问顺序
//! instance.proto 是实例：instance 自身->instance.proto=>instance.proto.instance2->instance.proto.instance2.proto2
//! instance.proto 是原型：instance 自身->instance.proto=>instance.proto.proto2
