import * as Immutable from 'immutable';
import * as ValveState from './valve-state';
import { ActionTypes } from './actions';

export const Reducer = (state: any = ValveState.InitialState, action: any) => {

    switch (action.type) {
        case ActionTypes.SUCCESSFUL_UNLOCK:
            console.log("Successful unlock in reducer");
            return state.set("validPin", action.pin);
        case ActionTypes.LOCK:
            console.log("Lock action in reducer");
            break
        case ActionTypes.VALVE_STATE_RECEIVED:
            console.log("Valve state received in reducer");
            return state
                .set("current", action.valveState.current)
                .set("closeAt", action.valveState.closeAt);
        default:
            return state;
    }
};