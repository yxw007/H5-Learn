let arr = [1, 1, 2, 3, 3, 4];
let result = arr.filter((item, index, self) => {
  return self.indexOf(item) === index;
});
console.log(result);
