const { debounce, throttleStamp, throttleTimer } = require("./antiShake");

let obj = {};
let callback = (one, two) => {
  console.log("tick", one, two);
};
let time = 5000;
let deb = debounce(obj, callback, time);
let thStamp = throttleStamp(callback, time);
let thTimer = throttleTimer(callback, time);

setInterval(() => {
  console.log("interval");
  thTimer(123);
}, 1000);
