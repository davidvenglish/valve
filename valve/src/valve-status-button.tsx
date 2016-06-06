﻿import * as React from 'react';
import BaseComponent from './base-component';
import * as classNames from 'classnames';
import * as ValveStates from './valve-state';

export default class ValveStatusButton extends BaseComponent {

    constructor() {
        super();
    }

    handleOnClick = () => {

        console.log("handleOnClick in ValveStatusButton");
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
                { 'is-entered': this.props.pin[i] }
            );
        }

        var lockData: any = {};
        if (this.props.valveState == ValveStates.ValveStates.CLOSED) {
            lockData.style = { color: 'red'};
            lockData.icon = 'lock';
        }
        else if (this.props.valveState == ValveStates.ValveStates.OPEN) {
            lockData.style = { color: 'green'};
            lockData.icon = 'lock_open';
        }
        else if (this.props.valveState == ValveStates.ValveStates.UNKNOWN) {
            lockData.style = { color: 'gray'};
            lockData.icon = '?';
        }

        return <div style={divStyle}>
            <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
                <i style={lockData.style} className="material-icons">{lockData.icon}</i>
            </button>
            <br />

            <div>
                {dotClasses.map(function (dotClass, key) {
                    return <i key={key} className={dotClass}>fiber_manual_record</i>
                }, this) }
            </div>

        </div>
    }
}
