import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Keypad } from './keypad';

var el = document.createElement('div');
document.body.appendChild(el);

ReactDOM.render(<Keypad />, el);