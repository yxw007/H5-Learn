const { autoRun } = require("../../js/helper");

let url = "https://www.baidu.com/m?f=8&ie=utf-8&rsv_bp=1&tn=monline_3_dg&wd=session";

function parseURL(url) {
  if (!url || url.length <= 0 || url.indexOf("?") < 0) {
    return {};
  }

  let res = {};

  url.replace(/([^=&?]+)=([^=&?]+)/g, (...args) => {
    //! 注意：这里不能用arguments，这里的arguments是外层方法的arguments参数
    res[args[1]] = args[2];
  });

  return res;
}

let ret = parseURL(url);
console.log(ret);
