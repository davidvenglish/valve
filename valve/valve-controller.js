
var ValveStates = {
	CLOSED: 'closed',
	OPEN: 'open',
	UNKNOWN: 'unknown'
};

var state = {
	current: ValveStates.UNKNOWN,
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
		// Should this read the state?
		return state;
	},
	
	lockValve: function () {
		// Lock via pin.
		state.current = ValveStates.CLOSED;
		state.closeAt = null;

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