const { autoRun } = require("../helper");

autoRun("1.基本使用", () => {
  let arr1 = [1, 2, [3, 4, [5, 6]]];
  console.log(arr1.flat()); // [1, 2, 3, 4, [5, 6]]
  //! 传一个参数表示拍平的深度
  console.log(arr1.flat(2)); // [1, 2, 3, 4, 5, 6]
});

autoRun("1.利用栈拍平数组(后序遍历)", () => {
  let arr = [
    {
      id: 1,
      list: [
        {
          id: 10,
          list: [
            { id: 101, list: [] },
            { id: 102, list: null },
          ],
        },
      ],
    },
    {
      id: 2,
      list: [
        {
          id: 20,
          list: [
            { id: 201, list: [] },
            { id: 202, list: null },
          ],
        },
      ],
    },
  ];

  let res = [];

  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
    while (stack.length != 0) {
      let item = stack.pop();
      if (item.list && item.list.length > 0) {
        let list = item.list;
        for (let j = list.length - 1; j >= 0; j--) {
          list[j].parent_id = item.id;
          stack.push(list[j]);
        }
        item.list = null;
        stack.push(item);
      } else {
        res.push(item);
      }
    }
  }
  console.log(res);
});
