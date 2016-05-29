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

        var style = {
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '200px'
        };

        return <div style={style}>

            <table>
                <tr>
                    <td>
                        <Key
                            keyText='1'
                            onClick={this.onKeyClick}
                            />
                    </td>
                    <td>
                        <Key
                            keyText='2'
                            onClick={this.onKeyClick}
                            />
                    </td>
                    <td>
                        <Key
                            keyText='3'
                            onClick={this.onKeyClick}
                            />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key
                            keyText='4'
                            onClick={this.onKeyClick}
                            />
                    </td>
                    <td>
                        <Key
                            keyText='5'
                            onClick={this.onKeyClick}
                            />
                    </td>
                    <td>
                        <Key
                            keyText='6'
                            onClick={this.onKeyClick}
                            />
                    </td>
                </tr>

                <tr>
                    <td>
                        <Key
                            keyText='7'
                            onClick={this.onKeyClick}
                            />
                    </td>
                    <td>
                        <Key
                            keyText='8'
                            onClick={this.onKeyClick}
                            />
                    </td>
                    <td>
                        <Key
                            keyText='9'
                            onClick={this.onKeyClick}
                            />
                    </td>
                </tr>
            </table>
        </div>


    }
}