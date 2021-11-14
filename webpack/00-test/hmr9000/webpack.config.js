const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HotmoduleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
module.exports = {
    mode:'development',
    entry:"./src/index.js",
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,"dist")
    },
    devServer:{
        hot:true,
        port:8080,
        contentBase:path.resolve(__dirname,"static"),
    },
    plugins:[
        new HtmlWebpackPlugin({
        template:'./public/index.html'}),
        new HotmoduleReplacementPlugin()
    ]
}