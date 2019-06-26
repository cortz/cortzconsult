import React, {Component} from 'react';
import {IndexLink, browserHistory} from 'react-router';

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="contact">
                <h3>Want to work together?</h3>
                <p>I'm currently accepting new projects and would love to hear about yours.<br /> 
                Please take a few minutes to tell me about it.</p>
                <a href="mailto:mads@cortzconsult.dk" className="my-btn">Contact me!</a>
                <div className="skills">
                    <h4>I'm really good at</h4>
                    <div className="tags">
                        Vue.js, C#, ASP.NET, React, SQL, HTML5, CSS3, SCSS, LESS, AWS, CDN, JavaScript, Git, Azure
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
