const AutoExternalPlugin = require("./plugins/auto-external-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new AutoExternalPlugin({
      lodash: {
        globalVariable: "_",
        url: "https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.js",
      },
    }),
  ],
};
