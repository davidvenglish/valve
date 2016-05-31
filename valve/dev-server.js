var express = require("express");

var app = express();

app.use(express.static("build"));

app.get('/valve', function (req, res)
{
    res.send(JSON.stringify({ closeAt: Date.now() }));
});

app.listen(3000, function ()
{
    console.log("Express app listening at 3000");
});

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.hot-reload.config.js');

new WebpackDevServer(webpack(config), {
	hot: true,
	historyApiFallback: true,
	proxy: {
		"*": "http://localhost:3000"
	},
	stats: { colors: true }
}).listen(3001, 'localhost', function (err, result) {
	if (err) {
		console.log(err);
	}
	
	console.log("Webpack listening at localhost: 3001");
});