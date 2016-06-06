var DEFAULT_UNLOCK_TIME = 5;
var express = require("express");
var bodyParser = require("body-parser");
var valveController = require("./valve-controller.js");

var app = express();
app.use(bodyParser.json());
app.use(express.static("public"));



function hasValidPin(req, res) {
	var pin = req.body.pin;
	console.log("Pin received on server: " + pin);
	
	if (req.body.pin == "1,2,3,4") {
		return true;
	}
	else {
		res.send(JSON.stringify({
			success: false,
			message: "Invalid pin"
		}));
		return false;
	}
}

app.post('/unlock', function (req, res) {
	
	if (hasValidPin(req, res)) {
		
		var unlockTime = req.body.unlockTime || 5;
		
		valveController.unlock(unlockTime);

		res.send(JSON.stringify({
			success: true
		}));
	}
});

app.get('/valve-state', function (req, res) {
	res.send(JSON.stringify(valveController.getValveState()));
});

app.listen(3000, function () {
	console.log("Express app listening at 3000");
});