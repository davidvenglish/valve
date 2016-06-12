import * as React from 'react';
import BaseComponent from './base-component';

export default class Key extends BaseComponent {

    constructor(props: any) {
        super(props);
    }

    handleOnClick = () => {
        this.props.onClick(this.props.keyText);
    }
    render() {

        return <button onTouchTap={this.handleOnClick} className="key mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
            {this.props.keyText}
        </button>
    }
}
