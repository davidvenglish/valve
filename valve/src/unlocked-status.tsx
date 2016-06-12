import * as React from 'react';
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

    handleExtend = (seconds) => {
        this.props.extendUnlock(seconds);
    }

    render() {

        var divStyle = {
            textAlign: 'center'
        };

        return <div style={divStyle}>

            <div>{this.props.timeUntilClose}</div>

            <button className="mdl-button mdl-js-button mdl-button--icon">
                <i style={{ color: 'green' }} className="material-icons">lock_open</i>
            </button>

            <button onTouchTap={this.handleLock} className="mdl-button mdl-js-button mdl-button--icon">
                <i style={{ color: 'red' }} className="material-icons">lock</i>
            </button>
        </div>
    }
}
