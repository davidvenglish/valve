import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Mdl from 'material-design-lite';

export default class BaseComponent extends React.Component<any, any> {

    constructor() {
        super();

        var mdl: any = Mdl;
        this.state = {};
    }

    componentDidMount() {

        var element = ReactDOM.findDOMNode(this) as HTMLElement;
        componentHandler.upgradeElements(element);
    }

    componentDidUpdate() {

        var element = ReactDOM.findDOMNode(this) as HTMLElement;
        componentHandler.upgradeElements(element);
    }
}
