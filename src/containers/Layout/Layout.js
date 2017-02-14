import React, {Component} from 'react';
import {IndexLink, browserHistory} from 'react-router';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app container">
                <div className="header">
                    <h1>Hi, I'm Mads. I build web applications.</h1>
                    <a href="mailto:mads@cortzconsult.dk" className="my-btn">Yes I'm available for hire!</a>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;