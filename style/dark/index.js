/* 
参考资料：
https://lea.verou.me/2021/03/inverted-lightness-variables/ 
https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting
*/
const toggleBtn = document.getElementById("toggle");
const bodyEl = document.body;

let curMode = "light";

function setPreferredColorScheme() {
  console.log("changing");
  curMode = curMode == "light" ? "dark" : "light";
  console.log("切换到：", curMode);
  for (var i = document.styleSheets[0].cssRules.length - 1; i >= 0; i--) {
    rule = document.styleSheets[0].cssRules[i].media;
    if (rule && rule.mediaText.includes("prefers-color-scheme")) {
      console.log("includes color scheme");
      switch (curMode) {
        case "light":
          rule.appendMedium("original-prefers-color-scheme");
          if (rule.mediaText.includes("light")) rule.deleteMedium("(prefers-color-scheme: light)");
          if (rule.mediaText.includes("dark")) rule.deleteMedium("(prefers-color-scheme: dark)");
          break;
        case "dark":
          rule.appendMedium("(prefers-color-scheme: light)");
          rule.appendMedium("(prefers-color-scheme: dark)");
          if (rule.mediaText.includes("original")) rule.deleteMedium("original-prefers-color-scheme");
          break;
        default:
          console.log("default");
          rule.appendMedium("(prefers-color-scheme: dark)");
          if (rule.mediaText.includes("light")) rule.deleteMedium("(prefers-color-scheme: light)");
          if (rule.mediaText.includes("original")) rule.deleteMedium("original-prefers-color-scheme");
      }
      break;
    }
  }
}
