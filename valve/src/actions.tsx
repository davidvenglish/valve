export var ActionTypes = {
    LOCK: 'LOCK',
    VALVE_STATE_RECEIVED: 'VALVE_STATE_RECEIVED',
    INVALID_PIN: 'INVALID_PIN',
    SET_PIN_NUMBER: 'SET_PIN_NUMBER',
    REMOVE_PIN_NUMBER: 'REMOVE_PIN_NUMBER'
};

export var createAddPinNumberAction = (number: string) => {

    return function (dispatch: Redux.Dispatch, getState: Function) {

        var currentPin = getState().get("pin");
        var newPin;

        if (currentPin.size == 4) {
            newPin = [number];
        }
        else {
            newPin = currentPin.push(number).toJS();
        }

        dispatch(createSetPinNumberAction(newPin));
    };
};

var createSetPinNumberAction = (number: Array<string>) => {

    return {
        type: ActionTypes.SET_PIN_NUMBER,
        number: number
    };
}

export var createRemovePinNumberAction = () => {

    return {
        type: ActionTypes.REMOVE_PIN_NUMBER
    };
}

export var createInvalidPinAction = () => {
    return {
        type: ActionTypes.INVALID_PIN
    };
}

export var createValveStateReceivedAction = (valveState: any) => {
    return {
        type: ActionTypes.VALVE_STATE_RECEIVED,
        valveState: valveState
    };
}

export var createGetValveStateAction = () => {
    return function (dispatch: Redux.Dispatch, getState: Function) {
        fetch("/valve-state").then(function (res) {
            if (res.ok) {
                res.json().then(function (data) {
                    console.log("Received response from /valve-state");
                    dispatch(createValveStateReceivedAction(data));
                });
            } else {
                console.log("Invalid server response", res.status);
            }
        }, function (e) {
            console.log("Fetch failed!", e);
        });
    };
}

export var createUnlockAction = (pin: any, seconds: string) => {
    return function (dispatch: Redux.Dispatch, getState: Function) {

        fetch('/unlock', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pin: pin,
                unlockTime: seconds
            })
        }).then((res) => {
            if (res.ok) {
                res.json().then((data) => {

                    if (data.success) {
                        dispatch(createGetValveStateAction());
                    }
                    else {
                        dispatch(createInvalidPinAction());
                    }
                });
            }
            else {
                console.log("Response error: " + res.status);
            }
        },
            (res) => {
                console.log("Fetch failed.");
            });
    }
}