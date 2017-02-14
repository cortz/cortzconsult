import React, {Component} from 'react';
import {IndexLink, browserHistory} from 'react-router';
import {Grid, Row, Col, MenuItem} from 'react-bootstrap';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <Grid fluid="true">
                    <Row>
                        <Col md={12} className="header">
                            <h1>Hi, I'm Mads. I build web applications.</h1>
                            <a href="mailto:mads@cortzconsult.dk" className="my-btn">Yes I'm available for hire!</a>
                        </Col>
                        
                        {this.props.children}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Layout;