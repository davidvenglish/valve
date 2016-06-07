import * as React from 'react';
import BaseComponent from './base-component';
import Keypad from './keypad';
import UnlockedStatus from './unlocked-status';
import * as Actions from './actions';
import { ValveStates } from './valve-state';
import { connect } from 'react-redux';

class App extends BaseComponent {

    constructor() {
        super();
    }

    render() {
        return (<div className="vertical-aligner">
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset-desktop mdl-cell--2-offset-tablet">
                    {this.props.valveState == ValveStates.OPEN ? <UnlockedStatus closeAt={this.props.closeAt}/> :
                        <Keypad
                            valveState={this.props.valveState}
                            closeAt={this.props.closeAt}
                            invalidPinAttempt={this.props.invalidPinAttempt}
                            tryPin={this.props.tryPin}
                            />
                    }
                </div>
            </div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        valveState: state.get("current"),
        closeAt: state.get("closeAt"),
        invalidPinAttempt: state.get("invalidPinAttempt")
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        tryPin: (pin: any) => {
            dispatch(Actions.createUnlockAction(pin, '5'));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);