import * as React from 'react';
import BaseComponent from './base-component';
import Key from './key';
import ValveStatusButton from './valve-status-button';

export default class Keypad extends BaseComponent {

    constructor() {
        super();

        this.state = {
            enteredNumbers: [],
            locked: true
        };

    }

    handleOnDeleteClick = () => {

        if (this.state.enteredNumbers.length > 0) {
            this.setState({ enteredNumbers: this.state.enteredNumbers.slice(0, this.state.enteredNumbers.length - 1) })
        }
    }

    onKeyClick = (keyText: string) => {

        var loginPin = this.state.enteredNumbers.concat(keyText)

        if (loginPin.length == 4) {

            console.log("Dispatch login attempt and freeze UI using pin: " + loginPin);

            // Reset the pin.
            this.setState({ enteredNumbers: [] });
        }
        else {

            console.log("Pin: " + loginPin);
            // Set the state to the new pin, and let the user continue.
            this.setState({ enteredNumbers: loginPin });
        }

    }

    render() {

        return <div >
            <ValveStatusButton
                pin={this.state.enteredNumbers}/>

            <div className="keypad-row">
                <Key
                    keyText='1'
                    onClick={this.onKeyClick}
                    />
                <Key
                    keyText='2'
                    onClick={this.onKeyClick}
                    />
                <Key
                    keyText='3'
                    onClick={this.onKeyClick}
                    />
            </div>
            <div className="keypad-row">
                <Key
                    keyText='4'
                    onClick={this.onKeyClick}
                    />
                <Key
                    keyText='5'
                    onClick={this.onKeyClick}
                    />
                <Key
                    keyText='6'
                    onClick={this.onKeyClick}
                    />
            </div>
            <div className="keypad-row">
                <Key
                    keyText='7'
                    onClick={this.onKeyClick}
                    />
                <Key
                    keyText='8'
                    onClick={this.onKeyClick}
                    />
                <Key
                    keyText='9'
                    onClick={this.onKeyClick}
                    />
            </div>
            <div className="keypad-row">
                <Key
                    keyText='*'
                    onClick={this.onKeyClick}
                    />
                <Key
                    keyText='0'
                    onClick={this.onKeyClick}
                    />
                <Key
                    keyText='#'
                    onClick={this.onKeyClick}
                    />
            </div>

            <div className="keypad-row">
                <div className="key">
                </div>
                <div className="key">
                </div>
                <div className="key">
                   
                    <button onClick={this.handleOnDeleteClick} className="mdl-button mdl-js-button mdl-js-ripple-effect flat-button-color">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    }
}