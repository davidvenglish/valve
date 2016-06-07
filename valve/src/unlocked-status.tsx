﻿import * as React from 'react';
import BaseComponent from './base-component';
import * as classNames from 'classnames';
import * as ValveStates from './valve-state';

export default class UnlockedStatus extends BaseComponent {

    constructor() {
        super();
    }

    handleOnClick = () => {

    }

    render() {

        var divStyle = {
            textAlign: 'center'
        };

        return <div style={divStyle}>
            <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
                <i style={{ color: 'green'}} className="material-icons">lock_open</i>
            </button>

            <div>Close at: {this.props.closeAt}</div>
        </div>
    }
}