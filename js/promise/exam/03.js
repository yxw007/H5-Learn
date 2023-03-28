setTimeout(() => {
  console.log("A");
  Promise.resolve().then(() => {
    console.log("B");
  });
}, 1000);

Promise.resolve().then(() => {
  console.log("C");
});

new Promise((resolve) => {
  console.log("D");
  resolve("");
}).then(() => {
  console.log("E");
});

async function sum(a, b) {
  console.log("F");
}

async function asyncSum(a, b) {
  await Promise.resolve();
  console.log("G");
  return Promise.resolve(a + b);
}

sum(3, 4);
asyncSum(3, 4);
console.log("H");

/* 
宏任务队列
微任务队列：C E G 
缓存队列：A

D
F
H

C
E
G
A
B

 */
