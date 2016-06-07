import * as React from 'react';
import BaseComponent from './base-component';
import Keypad from './keypad';
import UnlockedStatus from './unlocked-status';
import * as Actions from './actions';
import { ValveStates } from './valve-state';

export default class Layout extends BaseComponent {

    constructor() {
        super();
    }

    render() {
        return (<div className="vertical-aligner">
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset-desktop mdl-cell--2-offset-tablet">
                    {this.props.valveState == ValveStates.OPEN ? <UnlockedStatus closeAt={this.props.closeAt}/> :
                        <Keypad
                            valveState={this.props.valveState}
                            closeAt={this.props.closeAt}
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