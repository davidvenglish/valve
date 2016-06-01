import * as React from 'react';
import BaseComponent from './base-component';
import * as classNames from 'classnames';

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

        var iconStyle = {
            color: 'red'
        };

        var dotClasses = [];
        for (var i = 0; i < 4; i++) {
            dotClasses[i] = classNames(
                'pin-status-button',
                'material-icons',
                { 'is-entered': this.props.pin[i] }
            );
        }

        return <div style={divStyle}>
            <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
                <i style={iconStyle} className="material-icons">lock</i>
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
