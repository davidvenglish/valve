import * as Immutable from 'immutable';

export const ValveStates = {
    CLOSED: 'closed',
    OPEN: 'open',
    UNKNOWN: 'unknown'
};

export var InitialState = Immutable.Map({
    valveState: ValveStates.UNKNOWN,
    closeAt: null,
    pin: null
});