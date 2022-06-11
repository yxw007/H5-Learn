/**
 * 切割字符串
 * @param {*} message 切割支付
 * @param {*} subMaxLen 子串长度
 * @param {*} subRowMaxNum 最大子串数量
 * @param {*} ellipsisEnable 超长长度是否添加省略号
 * @returns {rows,surplus}
 */
function cutString(message, subMaxLen, subRowMaxNum, ellipsisEnable = true) {
  let rows = [];
  let chineseRegex = /[^\x00-\xff]/g;
  let ellipsisMark = "...";
  function next(str, subMaxLen, subRowMaxNum, ellipsisEnable) {
    if ((subRowMaxNum > 0 && rows.length >= subRowMaxNum) || str.length <= 0) {
      return { rows, surplus: str };
    }
    let fragment = "";
    let curLen = 0;
    let strLen = str.replace(chineseRegex, "**").length;
    let i = 0;
    for (; i < strLen; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) != null) {
        curLen += 2;
      } else {
        curLen++;
      }
      if (ellipsisEnable) {
        if (rows.length === subRowMaxNum - 1 && curLen + ellipsisMark.length > subMaxLen) {
          fragment += ellipsisMark;
          break;
        }
      }
      if (curLen > subMaxLen) {
        break;
      }
      fragment += singleChar;
    }
    if (fragment !== "") {
      rows.push(fragment);
    }
    return next(str.substring(i), subMaxLen, 2, true);
  }

  return next(message, subMaxLen, subRowMaxNum, ellipsisEnable);
}

let result = cutString("标题超过固定长度时自动换行不能与右侧小程序码重叠", 20);
console.log("result:" + JSON.stringify(result));
