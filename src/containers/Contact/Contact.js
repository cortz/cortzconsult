import React, {Component} from 'react';
import {IndexLink, browserHistory} from 'react-router';

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Skal vi arbejde sammen?</h3>
                <p>Jeg accepterer lige nu nye projekter og glæder mig til at høre om dit!<br /> 
                Brug 2 minutter på at fortælle mig om dit projekt.</p>
                <a href="mailto:mads@cortzconsult.dk" className="my-btn">Kontakt mig</a>
                <div className="skills">
                    <h4>Jeg er ekspert i:</h4>
                    <code>C#, ASP.NET, jQuery, SQL, HTML5, CSS3, SCSS, LESS, AWS, CDN, JavaScript, Git</code>
                </div>
            </div>
        )
    }
}

export default Contact;