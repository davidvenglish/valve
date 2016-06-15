var fs = require('fs');
var https = require('https');
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var valveController = require("./valve-controller.js");

app.use(bodyParser.json());
app.use(express.static("public"));

https.createServer({
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem')
}, app).listen(443, function () {
	console.log("Server listening on 443");
});

app.post('/unlock', function (req, res) {
	
	if (valveController.hasValidPin(req.body.pin) || valveController.isValveOpen()) {
		
		valveController.unlock();
		
		res.send(JSON.stringify({
			success: true
		}));
	}
	else {
		res.send(JSON.stringify({
			success: false,
			message: "Invalid pin"
		}));
		return false;
	}
});

app.post('/lock', function (req, res) {
	
	valveController.lock();
	
	res.send(JSON.stringify({
		success: true
	}));
});

app.get('/valve-state', function (req, res) {
	res.send(JSON.stringify(valveController.getValveState()));
});