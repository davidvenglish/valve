var config = require("/home/pi/valve-control/valve/valve-controller-config.js");

var Gpio = require('onoff').Gpio;

var CHANNEL = 17;

var outputPin = new Gpio(CHANNEL, 'out');

outputPin.writeSync(0);

var closeValveTimeoutId = null;

var timeUntilClose = null;

function closeValve() {
	
	outputPin.writeSync(0);
	timeUntilClose = null;
	clearTimeout(closeValveTimeoutId);
}

function openValve() {
	
	outputPin.writeSync(1);
	delayedCloseValve();
}

function readValveState() {
	
	
	var state;
	try
	{
		state = outputPin.readSync();
	}
	catch(e)
	{
		console.log(e);
	}

	if (state) {
		
		var totalSecondsLeft = (timeUntilClose - Date.now()) / 1000;
		var minutesLeft = Math.floor(totalSecondsLeft / 60);
		var secondsLeft = '' + Math.floor(totalSecondsLeft - (minutesLeft * 60));
		
		return {
			current: "open",
			timeUntilClose: minutesLeft + ":" + (secondsLeft.length == 1 ? ("0" + secondsLeft) : secondsLeft)
		};
	}
	else {
		return {
			current: "closed"
		};
	}
}

function delayedCloseValve() {
	
	clearTimeout(closeValveTimeoutId)
	var millisecondsUntilClose = config.UNLOCK_SECONDS * 1000;
	timeUntilClose = Date.now() + millisecondsUntilClose;
	closeValveTimeoutId = setTimeout(closeValve, millisecondsUntilClose);
}

module.exports = {
	
	getValveState: function () {
		
		return readValveState();
		
	},
	lock: function () {
		closeValve();
	},
	unlock: function () {
		openValve();
	},
	hasValidPin: function (pin) {
		return pin == config.PIN;
	}
};
