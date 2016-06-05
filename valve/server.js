var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const ValveStates = {
	CLOSED: 'closed',
	OPEN: 'open',
	UNKNOWN: 'unknown'
};

var InitialState = {
	valveState: ValveStates.UNKNOWN,
	closeAt: null
};

function hasValidPin(req, res) {
	var pin = req.body.pin;
	console.log("Pin received on server: " + pin);
	
	if (req.body.pin == "1,2,3,4") {
		return true;
	}
	else {
		res.send(JSON.stringify({
			validPin: false
		}));
		return false;
	}
}

app.post('/try-pin', function (req, res) {
	
	if (hasValidPin(req, res)) {
		res.send(JSON.stringify({
			validPin: true
		}));
	}
});

app.get('/valve-state', function (req, res) {
	res.send(JSON.stringify({
		valveState: ValveState.OPEN,
		closeAt: "some time"
	}));
});

app.listen(3000, function () {
	console.log("Express app listening at 3000");
});