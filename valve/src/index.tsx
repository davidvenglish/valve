import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Keypad } from './keypad';
import 'material-design-lite/dist/material.css';
import '../css/app.css';
import 'roboto-font/css/fonts.css';

var el = document.createElement('div');
document.body.appendChild(el);

ReactDOM.render(<Keypad />, el);