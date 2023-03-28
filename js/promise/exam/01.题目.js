setTimeout(() => console.log(0));
new Promise((resolve) => {
  console.log(1);
  resolve(2);
  console.log(3);
}).then((o) => console.log(o));

new Promise((resolve) => {
  console.log(4);
  resolve(5);
})
  .then((o) => console.log(o))
  .then(() => console.log(6));
