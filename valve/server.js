var DEFAULT_UNLOCK_TIME = 5;
var express = require("express");
var bodyParser = require("body-parser");
var valveController = require("./valve-controller.js");

var app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

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

app.listen(3000, function () {
	console.log("Express app listening at 3000");
});