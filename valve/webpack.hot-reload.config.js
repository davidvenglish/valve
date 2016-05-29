var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        path.resolve(__dirname, "src", "index.tsx")
    ],
    output: {
        path: path.join(__dirname, "build"),
        filename: "app.js",
    },
    devtool: "source-map",
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.jpg$/, loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.gif$/, loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.woff$/, loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.eot$/, loader: "file-loader?prefix=font/" },
            { test: /\.ttf$/, loader: "file-loader?prefix=font/" },
            { test: /\.svg$/, loader: "file-loader?prefix=font/" },
            { test: /\.tsx$/, loader: "ts-loader" },
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: "Draft Control"
            }
        ),
        new webpack.HotModuleReplacementPlugin()
    ]
};
