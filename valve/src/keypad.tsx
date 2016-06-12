import * as React from 'react';
import BaseComponent from './base-component';
import Key from './key';
import UnlockFeedbackIndicator from './unlock-feedback-indicator';
import * as Actions from './actions'

export default class Keypad extends BaseComponent {

    constructor(props: any) {
        super(props);
    }

    handleOnDeleteClick = () => {
        this.props.removePinNumber();
    }

    onKeyClick = (keyText: string) => {
        this.props.addPinNumber(keyText);
    }

    render() {

        if (this.props.pin.length == 4) {
            this.props.tryPin(this.props.pin);
        }

        return (<div className="keypad">
            
            <UnlockFeedbackIndicator
                valveState={this.props.valveState}
                pin={this.props.pin}
                invalidPin={this.props.invalidPin}/>

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

                    <button onTouchTap={this.handleOnDeleteClick} className="mdl-button mdl-js-button mdl-js-ripple-effect flat-button-color key delete-key">
                        Delete
                    </button>
                </div>
            </div>
        </div>)
    }
}