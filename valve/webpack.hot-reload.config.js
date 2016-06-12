var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3001', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		'whatwg-fetch',
		'es6-promise',
		path.resolve(__dirname, "src", "index.tsx"),
		path.resolve(__dirname, "css", "app.css")
	],
	output: {
		path: path.join(__dirname, "public"),
		filename: "app.js",
	},
	devtool: "source-maps",
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
			{ test: /\.tsx$/, loaders: ["react-hot", "ts-loader"] }
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
