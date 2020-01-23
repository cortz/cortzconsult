import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {IndexLink, browserHistory} from 'react-router';
import {Grid, Row, Col, MenuItem} from 'react-bootstrap';
import { animateScroll } from "react-scroll";

import me from '../../images/me.png';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    scrollToBottom = () => {
        animateScroll.scrollToBottom();
    }

    render() {
        return (
            <div className="app">
                <Grid fluid={true}>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className="header">
                            <img src={me} />
                            <h1>Hi, I'm Mads. I build web applications.</h1>
                            <a href="#" className="my-btn" onClick={this.scrollToBottom}>Yes I'm available for hire!</a>
                        </Col>
                        
                        {this.props.children}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Layout;