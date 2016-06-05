import * as React from 'react';
import BaseComponent from './base-component';
import Keypad from './keypad';

export default class App extends BaseComponent {

    constructor() {
        super();
    }

    render() {
        return (<div className="vertical-aligner">
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset-desktop mdl-cell--2-offset-tablet">
                    <Keypad />
                </div>
            </div>
        </div>)
    }
}