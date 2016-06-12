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

var poll = () => {

    store.dispatch(Actions.createGetValveStateAction());
    setTimeout(poll, 500);
};

try {

    store.dispatch(Actions.createGetValveStateAction());

    var listenForInit = store.subscribe(() => {

        var el = document.createElement('div');
        document.body.appendChild(el);

        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            el);

        poll();

        // Unsubscribe the init handler.
        listenForInit();
    });

}
catch (e) {
    alert(e);
}