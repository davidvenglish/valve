export var ActionTypes = {
    UNLOCK: 'UNLOCK',
    LOCK: 'LOCK',
    SUCCESSFUL_UNLOCK: 'SUCCESSFUL_UNLOCK',
    VALVE_STATE_RECEIVED: 'VALVE_STATE_RECEIVED'
};

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

export var createSuccessfulUnlockAction = (pin: string) => {
    return {
        type: ActionTypes.SUCCESSFUL_UNLOCK,
        pin: pin
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
                        console.log("Response from server: " + data.success);
                        dispatch(createSuccessfulUnlockAction(pin));
                        dispatch(createGetValveStateAction());
                    }
                    else {
                        console.log("Response from server: " + data.message);
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