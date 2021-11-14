const path = require("path")
module.exports = {
    mode:'development',
    entry:"./src/index.js",
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: path.resolve(__dirname, "./src/loaders/replace.js"),   
              },
            {
                test: /\.txt$/,
                use: {
                  loader: path.resolve(__dirname, './src/loader.js'),
                  options: { name: 'Alice' },
                },
            },
        ]
    }
}