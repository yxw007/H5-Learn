const { autoRun } = require("../helper");

autoRun("1.删除指定数量元素", () => {
  let arr = [1, 2, 3, 4];
  //!从索引2开始，删除2个元素，获得删除的元素，会该表源数组
  console.log(arr.splice(2, 2));

  console.log(arr);
});

autoRun("2.删除超出范围的元素", () => {
  let arr = [1, 2, 3, 4];
  //!从索引2开始，删除4个元素（超出范围的位置将忽略），获得删除的元素，会该表源数组
  console.log(arr.splice(2, 4));

  console.log(arr);
});

autoRun("3.删除2个元素,同时添加3个元素", () => {
  let arr = [1, 2, 3, 4];
  //!从索引2开始，删除4个元素（超出范围的位置将忽略），获得删除的元素，会该表源数组
  console.log(arr.splice(2, 4, 10, 11, 12));

  console.log(arr);
});
