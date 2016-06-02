var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: [
		path.resolve(__dirname, "src", "index.tsx"),
		path.resolve(__dirname, "css", "app.css")
	],
	output: {
		path: path.join(__dirname, "build"),
		filename: "app.js",
	},
	devtool: "source-map",
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.png$/, loader: "url-loader?name=img/[name].[ext]img/&limit=5000" },
			{ test: /\.jpg$/, loader: "url-loader?name=img/[name].[ext]img/&limit=5000" },
			{ test: /\.gif$/, loader: "url-loader?name=img/[name].[ext]img/&limit=5000" },
			{ test: /\.woff$/, loader: "file-loader?name=fonts/[name].[ext]" },
			{ test: /\.woff2$/, loader: "file-loader?name=fonts/[name].[ext]" },
			{ test: /\.eot$/, loader: "file-loader?name=fonts/[name].[ext]" },
			{ test: /\.ttf$/, loader: "file-loader?name=fonts/[name].[ext]" },
			{ test: /\.svg$/, loader: "file-loader?name=fonts/[name].[ext]" },
			{ test: /\.tsx$/, loader: "ts-loader" }
		]
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tsx']
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				title: "Draft Control",
				template: "index-template.html",
				inject:'body'
			}
		)
	]
};
