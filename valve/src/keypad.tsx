import * as React from 'react';
import BaseComponent from './base-component';
import Key from './key';

export class Keypad extends BaseComponent {

    pin: string;
    enteredNumbers = [];
    constructor() {
        super();
    }

    calculatePin = (cur: string) => {
        this.pin += cur;
    }

    onKeyClick = (keyText: string) => {

        if (this.enteredNumbers.length >= 4) {
            this.enteredNumbers.shift();
        }

        this.enteredNumbers.push(keyText);

        this.pin = '';
        this.enteredNumbers.map(this.calculatePin, this);
        console.log("Pin: " + this.pin);
    }

    render() {

        return <div >
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset-desktop mdl-cell--2-offset-tablet">
                    <div className="keypad-row">
                        <Key
                            keyText='1'
                            onClick={this.onKeyClick}
                            />
                        <Key
                            keyText='2'
                            onClick={this.onKeyClick}
                            />
                        <Key
                            keyText='3'
                            onClick={this.onKeyClick}
                            />
                    </div>
                    <div className="keypad-row">
                        <Key
                            keyText='4'
                            onClick={this.onKeyClick}
                            />
                        <Key
                            keyText='5'
                            onClick={this.onKeyClick}
                            />
                        <Key
                            keyText='6'
                            onClick={this.onKeyClick}
                            />
                    </div>
                    <div className="keypad-row">
                        <Key
                            keyText='7'
                            onClick={this.onKeyClick}
                            />
                        <Key
                            keyText='8'
                            onClick={this.onKeyClick}
                            />
                        <Key
                            keyText='9'
                            onClick={this.onKeyClick}
                            />
                    </div>
                </div>
            </div>
        </div>
    }
}