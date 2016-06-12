
var ValveStates = {
	CLOSED: 'closed',
	OPEN: 'open',
	UNKNOWN: 'unknown'
};

var state = {
	current: ValveStates.CLOSED,
	closeAt: null
};

var closeValveTimeoutId = null;
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
		
		if (state.current == ValveStates.OPEN) {
			var totalSecondsLeft = (state.closeAt - Date.now()) / 1000;
			var minutesLeft = Math.floor(totalSecondsLeft / 60);
			

			var secondsLeft = '' + Math.floor(totalSecondsLeft - (minutesLeft * 60));
			
			return {
				current: ValveStates.OPEN,
				timeUntilClose: minutesLeft + ":" + (secondsLeft.length == 1 ? ("0" + secondsLeft) : secondsLeft)
			};
		}
		else {
			return {
				current: state.current
			};
		}
	},
	
	lockValve: function () {
		// Lock via pin.
		state.current = ValveStates.CLOSED;
		state.timeUntilClose = null;

		// call read state function?
	},
	loadStateFromFile: function () {
	},
	unlock: function (seconds) {
		// Set the pin
		
		state.current = ValveStates.OPEN;
		delayedCloseValve(seconds);
	}
};