function* generator() {
}

const g = generator();
console.log(g);
console.log(g.next());

//! 说明：生成器的默认迭代器指向生成器本身
console.log(g === g[Symbol.iterator]());
