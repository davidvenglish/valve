import * as React from 'react';
import BaseComponent from './base-component';
import * as classNames from 'classnames';
import * as ValveStates from './valve-state';

export default class UnlockFeedbackIndicator extends BaseComponent {

    constructor(props: any) {
        super(props);
    }

    render() {

        var divStyle = {
            textAlign: 'center'
        };

        var dotClasses = [];
        for (var i = 0; i < 4; i++) {
            dotClasses[i] = classNames(
                'pin-status-button',
                'material-icons',
                { 'is-entered': this.props.pin[i] && !(this.props.invalidPin)},
                { 'invalid-pin': this.props.invalidPin}
            );
        }

        var lockData: any = {};
        if (this.props.valveState == ValveStates.ValveStates.CLOSED) {
            lockData.style = { color: 'red'};
            lockData.icon = 'lock';
        }
        else if (this.props.valveState == ValveStates.ValveStates.UNKNOWN) {
            lockData.style = { color: 'gray'};
            lockData.icon = '?';
        }

        return <div style={divStyle}>
                <i style={lockData.style} className="material-icons">{lockData.icon}</i>
            <br />

            <div>
                {dotClasses.map(function (dotClass, key) {
                    return <i key={key} className={dotClass}>fiber_manual_record</i>
                }, this) }
            </div>
        </div>
    }
}