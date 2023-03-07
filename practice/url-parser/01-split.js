let url = "https://www.baidu.com/m?f=8&ie=utf-8&rsv_bp=1&tn=monline_3_dg&wd=session";

function parseURL(url) {
  if (!url || url.length <= 0 || url.indexOf("?") < 0) {
    return {};
  }

  let param = url.slice(url.indexOf("?") + 1);
  let arr = param.split("&");
  let res = {};
  arr.forEach((item) => {
    if (item.length > 0) {
      let obj = item.split("=");
      res[obj[0]] = obj[1];
    }
  });

  return res;
}

let ret = parseURL(url);
console.log(ret);
