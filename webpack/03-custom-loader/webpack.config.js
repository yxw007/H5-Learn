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
        client: {
            logging: "info",
            overlay: true,
            progress: true,
        },
        hot:true,
        port:9000,
    },
    resolveLoader: {
        alias: {
            "replace-name-loader": path.resolve(__dirname, "./build/replace-name-loader.js"),
            "replace-age-loader": path.resolve(__dirname, "./build/replace-age-loader.js"),
        }
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use:[{
                        loader: 'replace-name-loader',
                        options: {
                            name: "Alice",
                        },
                    },{
                        loader: 'replace-age-loader',
                        options: {
                            age: 100,
                        },
                    }
                ],
              },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:'index.html',
            inject: true
        }),
        new HotmoduleReplacementPlugin()
    ]
}