var closeValveTimeoutId = null;

var ValveStates = {
	CLOSED: 'closed',
	OPEN: 'open',
	UNKNOWN: 'unknown'
};

function closeValve() {
	
	// Lock via pin.
	state.current = ValveStates.CLOSED;
	state.timeUntilClose = null;
	clearTimeout(closeValveTimoutId);
}

function openValve(seconds) {
	
	// Set the pin
	state.current = ValveStates.OPEN;
	delayedCloseValve(seconds);
}

function readValveState() {
	
	// Actually read the pin right here.
	return state.current;
}

var state = {
	current: ValveStates.CLOSED,
	closeAt: null
};

function closeValve(minutes) {
	// Set the pin 
	
	// Read the state? On state change?
	state.current = ValveStates.CLOSED;
	state.closeAt = null;
}

function delayedCloseValve(seconds) {
	
	clearTimeout(closeValveTimeoutId)
	seconds = parseInt(seconds);
	var millisecondsUntilClose = seconds * 1000;
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
	unlock: function (seconds) {
		openValve(seconds);
	},
	isValveOpen: function () {
		return (readValveState() === ValveStates.OPEN);
	}
};