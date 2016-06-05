
export var ActionTypes = {
    TRY_PIN: 'try_pin',
    EXTEND_SESSION: 'extend_session',
    LOCK: 'lock'
};

export var createTryPinAction = (pin: any) => {
    return function (dispatch: Redux.Dispatch, getState: Function) {

        fetch('/try-pin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pin: pin
            })
        }).then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    console.log("Response from server: " + data.validPin);
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