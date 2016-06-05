var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.hot-reload.config.js');

require('./server.js');

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