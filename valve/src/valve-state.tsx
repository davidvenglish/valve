import * as Immutable from 'immutable';

export const ValveStates = {
    CLOSED: 'closed',
    OPEN: 'open',
    UNKNOWN: 'unknown'
};

export var InitialState = Immutable.Map({
    current: ValveStates.UNKNOWN,
    closeAt: null,
    validPin: null,
    invalidPinAttempt: false
});