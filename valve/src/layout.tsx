import * as React from 'react';
import BaseComponent from './base-component';
import Keypad from './keypad';
import UnlockedStatus from './unlocked-status';
import * as Actions from './actions';
import { ValveStates } from './valve-state';

export default class Layout extends BaseComponent {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (<div className="vertical-aligner">
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset-desktop mdl-cell--2-offset-tablet">
                    {this.props.valveState == ValveStates.OPEN ? <UnlockedStatus
                        lock={this.props.lock}
                        extendUnlock={this.props.extendUnlock}
                        timeUntilClose={this.props.timeUntilClose}/> :
                        <Keypad
                            valveState={this.props.valveState}
                            timeUntilClose={this.props.timeUntilClose}
                            invalidPin={this.props.invalidPin}
                            pin={this.props.pin}
                            addPinNumber={this.props.addPinNumber}
                            removePinNumber={this.props.removePinNumber}
                            tryPin={this.props.tryPin}
                            />
                    }
                </div>
            </div>
        </div>)
    }
}