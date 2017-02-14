import React, {Component} from 'react';
import {IndexLink, browserHistory} from 'react-router';

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact">
                <h3>Want to work together?</h3>
                <p>I'm currently accepting new projects and would love to hear about yours.<br /> 
                Please take a few minutes to tell me about it.</p>
                <a href="" className="my-btn">Contact me!</a>
            </div>
        )
    }
}

export default Contact;