/* 
相关资料：https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de
*/
import { AbstractNode } from "./internal.js";

console.log(
  AbstractNode.from({
    today: {
      needCoffee: true,
      writeBlog: true,
    },
    tomorrow: {
      holiday: "hopefully!",
      zenMode: {
        forever: true,
      },
    },
  }).print()
);
