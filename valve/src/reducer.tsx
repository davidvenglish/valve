import * as Immutable from 'immutable';
import * as ValveState from './valve-state';
import { ActionTypes } from './actions';

export const Reducer = (state: any = ValveState.InitialState, action: any) => {

    switch (action.type) {
        case ActionTypes.VALVE_STATE_RECEIVED:
            console.log("Valve state received in reducer");
            return state.set("current", action.valveState.current).set("closeAt", action.valveState.closeAt);
        case ActionTypes.INVALID_PIN:
            return state.set("invalidPin", true);
        case ActionTypes.SET_PIN_NUMBER:
            return state.set("pin", Immutable.List<string>(action.number)).set("invalidPin", false);
        case ActionTypes.REMOVE_PIN_NUMBER:
            return (state.get("pin").size > 0) ? state.set("pin", state.get("pin").pop()).set("invalidPin", false) : state;
        default:
            return state;
    }
};