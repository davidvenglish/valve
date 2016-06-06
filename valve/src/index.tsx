import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import App from './app';
import { createStore, applyMiddleware } from 'redux'
import * as Actions from './actions';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Reducer } from './reducer';
injectTapEventPlugin();

const store = createStore(
    Reducer,
    applyMiddleware(thunk)
);

store.dispatch(Actions.createGetValveStateAction());

var el = document.createElement('div');
document.body.appendChild(el);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    el);