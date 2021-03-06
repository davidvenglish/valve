﻿import * as React from 'react';
import BaseComponent from './base-component';
import * as classNames from 'classnames';
import * as ValveStates from './valve-state';

export default class UnlockedStatus extends BaseComponent {

    constructor(props: any) {
        super(props);
    }

    handleLock = () => {
        this.props.lock();
    }

    handleExtend = () => {

        this.props.extendUnlock();
    }

    render() {

        var divStyle = {
            textAlign: 'center'
        };

        return <div className="status" style={divStyle}>

            <div className="countdown">{this.props.timeUntilClose}</div>

            <div className="status-button-wrapper">

                <button onTouchTap={this.handleExtend} className="mdl-button mdl-js-button mdl-button--icon large-button">
                    <i style={{ color: 'green' }} className="material-icons">lock_open</i>
                </button>

                <button onTouchTap={this.handleLock} className="mdl-button mdl-js-button mdl-button--icon large-button">
                    <i style={{ color: 'red' }} className="material-icons">lock</i>
                </button>
            </div>
        </div>
    }
}
