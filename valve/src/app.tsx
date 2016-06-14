import * as React from 'react';
import BaseComponent from './base-component';
import * as Actions from './actions';
import { connect } from 'react-redux';
import Layout from './layout';

class App extends BaseComponent {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Layout
                valveState={this.props.valveState}
                timeUntilClose={this.props.timeUntilClose}
                invalidPin={this.props.invalidPin}
                pin={this.props.pin}
                addPinNumber={this.props.addPinNumber}
                removePinNumber={this.props.removePinNumber}
                tryPin={this.props.tryPin}
                lock={this.props.lock}
                extendUnlock={this.props.extendUnlock}
                />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        valveState: state.get("current"),
        timeUntilClose: state.get("timeUntilClose"),
        invalidPin: state.get("invalidPin"),
        pin: state.get("pin").toJS()
    };
}

const mapDispatchToProps = (dispatch) => {

    return {
        addPinNumber: (number: string) => {
            dispatch(Actions.createAddPinNumberAction(number));
        },
        removePinNumber: () => {
            dispatch(Actions.createRemovePinNumberAction());
        },
        tryPin: (pin: any) => {
            dispatch(Actions.createUnlockAction(pin));
        },
        extendUnlock: (seconds: string) => {
            dispatch(Actions.createUnlockAction(null)); 
        },
        lock: () =>
        {
            dispatch(Actions.createLockAction());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);