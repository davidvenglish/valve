import * as React from 'react';
import BaseComponent from './base-component';
import * as Actions from './actions';
import { connect } from 'react-redux';
import Layout from './layout';

class App extends BaseComponent {

    constructor() {
        super();
    }

    render() {
        return (
            <Layout
                valveState={this.props.valveState}
                closeAt={this.props.closeAt}
                invalidPin={this.props.invalidPin}
                pin={this.props.pin}
                addPinNumber={this.props.addPinNumber}
                removePinNumber={this.props.removePinNumber}
                tryPin={this.props.tryPin}
                />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        valveState: state.get("current"),
        closeAt: state.get("closeAt"),
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
        tryPin: (pin: string) => {
            dispatch(Actions.createUnlockAction(pin, "5"));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);