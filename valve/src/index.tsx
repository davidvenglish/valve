import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Keypad } from './keypad';
import 'material-design-lite/dist/material.indigo-blue.min.css';

var el = document.createElement('div');
document.body.appendChild(el);

ReactDOM.render(<Keypad />, el);