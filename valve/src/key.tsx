import * as React from 'react';
import BaseComponent from './base-component';

export default class Key extends BaseComponent {

    constructor() {
        super();
    }

    handleOnClick = () => {
        this.props.onClick(this.props.keyText);
    }
    render() {
        var style = {
        };

        return <button style={style} onClick={this.handleOnClick} className="key mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
            {this.props.keyText}
        </button>
    }
}
