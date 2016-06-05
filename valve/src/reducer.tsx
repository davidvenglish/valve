import * as Immutable from 'immutable';
import * as ValveState from './valve-state';
import { ActionTypes } from './actions';

export const Reducer = (state: any = ValveState.InitialState, action: any) => {

    switch (action.type) {
        case ActionTypes.TRY_PIN:
            console.log("Try pin action in reducer");
            break;
        case ActionTypes.EXTEND_SESSION:
            console.log("Extend session action in reducer");
            break;
        case ActionTypes.LOCK:
            console.log("Lock action in reducer");
            break
        default:
            return state;
    }
};