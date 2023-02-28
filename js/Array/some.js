const { autoRun } = require("../helper");

autoRun("1.基本使用", () => {
  let arr = [1, 2, 3];
  let res = arr.some((v, index, arr2) => {
    console.log(`value:${v}`, `index:${index}`, `arr:${arr2}`);
    //! 只要找到一个满足条件就提前返回，否则会遍历完所有元素
    return v >= 1;
  });
  console.log(res);
});
