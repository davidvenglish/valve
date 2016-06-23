var config = require("/home/pi/valve-control/valve/valve-controller-config.js");
var closeValveTimeoutId = null;

var ValveStates = {
	CLOSED: 'closed',
	OPEN: 'open',
};

var state = {
	current: ValveStates.CLOSED,
	closeAt: null
};

function closeValve() {
	
	// Actually set the pin on the PI
	state.current = ValveStates.CLOSED;
	state.timeUntilClose = null;
	clearTimeout(closeValveTimeoutId);
}

function openValve() {
	
	if (readValveState() == ValveStates.CLOSED) {
		
		// Actually set the pin on the PI
		
		state.current = ValveStates.OPEN;
	}
	delayedCloseValve();
}

function readValveState() {
	
	// Actually read the pin right here.
	return state.current;
}

function delayedCloseValve() {
	
	clearTimeout(closeValveTimeoutId)
	var millisecondsUntilClose = config.UNLOCK_SECONDS * 1000;
	state.closeAt = Date.now() + millisecondsUntilClose;
	closeValveTimeoutId = setTimeout(closeValve, millisecondsUntilClose);
}

module.exports = {
	
	ValveStates: ValveStates,
	getValveState: function () {
		
		// Read the actual pin?
		var currentState = readValveState();
		
		if (currentState == ValveStates.OPEN) {
			
			var totalSecondsLeft = (state.closeAt - Date.now()) / 1000;
			var minutesLeft = Math.floor(totalSecondsLeft / 60);
			var secondsLeft = '' + Math.floor(totalSecondsLeft - (minutesLeft * 60));
			
			return {
				current: currentState,
				timeUntilClose: minutesLeft + ":" + (secondsLeft.length == 1 ? ("0" + secondsLeft) : secondsLeft)
			};
		}
		else {
			return {
				current: currentState
			};
		}
	},
	lock: function () {
		closeValve();
	},
	unlock: function () {
		openValve();
	},
	isValveOpen: function () {
		return (readValveState() === ValveStates.OPEN);
	},
	hasValidPin: function (pin) {
		return pin == config.PIN;
	}
};
