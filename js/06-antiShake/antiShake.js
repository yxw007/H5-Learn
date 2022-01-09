/**
 * 创建日期: 2021-12-13
 * 文件名称：AssisUilts.js
 * 创建作者：Potter
 * 开发版本：1.0.0
 * 相关说明：
 */

/**
 * 防抖
 * 例子：
 *   假如: time=100
 *   第一次调用时间: 2021-6-19 15:38:01 100
 *   第二次调用时间：2021-6-19 15:38:01 300
 *   超过设置的防抖间隔时间100，所以就触发
 * @param {*} target 防抖对象
 * @param {*} callback 回调函数
 * @param {*} delay 防抖时间，多次触发超过间隔时间time才触发 单位：毫秒数
 */
function debounce(callback, delay = 200) {
  const antiShakeMap = new WeakMap();
  return () => {
    if (!callback) {
      throw "target or callback is null or undefined !";
    }

    if (delay <= 0) {
      throw "time need > 0 !";
    }

    const context = this;
    const args = Array.from(arguments).splice(1);
    if (!antiShakeMap.has(context) || !antiShakeMap.get(context)) {
      antiShakeMap.set(context, {
        time: Date.now(),
        delay: delay,
        callback: callback,
        timer: 0,
      });

      callback.apply(context, args);
      return;
    }

    let info = antiShakeMap.get(context);
    info.callback = callback;
    let nowTime = Date.now();
    let lastTime = info.time;
    let subtractTime = nowTime - lastTime;

    if (info.timer) {
      clearTimeout(info.timer);
      // console.log("取消定时器：timer=" + info.timer);
    }

    if (subtractTime < info.delay) {
      //说明: 如果最后一次点击小于间隔，那就需要给最后一次添加定时器
      let offsetTime = lastTime + delay - nowTime;
      info.timer = setTimeout(info.callback, offsetTime);
      // console.log("最后一次小于间隔，需超时回调: timer=" + info.timer + ",offsetTime=" + offsetTime + ",antiShakeTime=" + info.antiShakeTime);
      return;
    }

    info.time = nowTime;
    if (callback) {
      callback.apply(context, args);
    }
  };
}

/**
 * 节流：时间戳版本
 * @param {} callback
 * @param {*} wait
 * @returns
 */
function throttleStamp(callback, delay) {
  let previous = 0;
  return () => {
    let now = Date.now();
    let context = this;
    let args = Array.from(arguments).splice(1);
    if (now - previous > delay) {
      callback.apply(context, args);
      previous = now;
    }
  };
}

/**
 * 节流： 定时器版本
 * @param {*} callback
 * @param {*} wait
 */
function throttleTimer(callback, delay) {
  let timerId = 0;
  return () => {
    let context = this;
    let args = Array.from(arguments).splice(1);
    if (!timerId) {
      timerId = setTimeout(() => {
        timerId = 0;
        callback.apply(context, args);
      }, delay);
    }
  };
}

module.exports = {
  debounce,
  throttleStamp,
  throttleTimer,
};
