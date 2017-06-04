import React, {Component} from 'react';
import {IndexLink, browserHistory} from 'react-router';
import {Grid, Row, Col, MenuItem} from 'react-bootstrap';

import droppointImage from '../../../images/droppoint.png';

export default function Project() {
    return (
        <div>
            <Row className="project">
                
                <Col md={6} sm={12} xs={12}>
                    <h3>Choose drop off point</h3>
                    <p>
                        Small project where you are able to choose where you want your package to be dropped off. <br/>
                        It's build with <strong>bootstrap</strong> and <strong>jQuery</strong>.<br/>
                        Data is pulled from bring and Shippii then shown on a map from <strong>Google Maps API</strong>.<br/><br/>
                        Time used: <strong>8 hours.</strong>
                    </p>
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <img src={droppointImage} />
                </Col>
            </Row>
        </div>
    )
}