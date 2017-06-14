import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {IndexLink, browserHistory} from 'react-router';
import {Grid, Row, Col, MenuItem} from 'react-bootstrap';
import Scroll from 'react-scroll';

import me from '../../images/me.jpg';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    scrollToBottom() {
        Scroll.animateScroll.scrollToBottom();
    }

    render() {
        return (
            <div className="app">
                <Grid fluid={true}>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className="header">
                            <img src={me} />
                            <h1>Hej, jeg hedder Mads. Jeg laver web løsninger</h1>
                            <a href="#" className="my-btn" onClick={this.scrollToBottom}>Jeg er ledig til nye projekter!</a>
                        </Col>
                        
                        {this.props.children}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Layout;