var fs = require('fs');
var https = require('https');
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var valveController = require("/home/pi/valve-control/valve/valve-controller.js");

app.use(bodyParser.json());
app.use(express.static("/home/pi/valve-control/valve/public"));

https.createServer({
	key: fs.readFileSync('/home/pi/valve-control/valve/key.pem'),
	cert: fs.readFileSync('/home/pi/valve-control/valve/cert.pem')
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
