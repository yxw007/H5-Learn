/**
 * 创建日期: 2021-12-13
 * 文件名称：05_test.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：组件引入改成按需引入
 *  import * from *  -> ()=>import(*)
 */

let strDic = `
import main from "@/view/main";
`;
let strContent = `
export default [
    //-------------------------------------------------------------------------
    //1. 核心功能
    {
      path: "/",
      alias: ["/main.html"],
      name: "index",
      nav_name: "首页",
      component: layout,
      redirect: "/main",
      children: [
        {
          name: "main",
          path: "/main",
          meta: { title: "首页", type: "index" },
          component: main,
        },
      ],
    },
  ];
`;
let dic = {};

strDic.replace(/import .*? from \".*?\"/g, (item) => {
  let strRow = item;
  let arr = strRow.split(" ");
  // console.log(JSON.stringify(arr));
  dic[arr[1]] = arr[arr.length - 1];
});

let result = strContent.replace(/component:.*/g, (item) => {
  let startIndex = item.indexOf(":");
  let name = item.substring(startIndex + 1, item.length - 1).trim();
  if (dic[name]) {
    let res = item.replace(name, ` () => import(${dic[name]})`);
    return res;
  } else {
    return item;
  }
});

console.log(result);
