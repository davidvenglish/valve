import * as React from 'react';
import { BaseComponent } from './base-component';

export class Keypad extends BaseComponent{

    constructor() {
        super();

        this.state = {};
    }
    
    render() {
        return <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
                Button
            </button>


    }
}