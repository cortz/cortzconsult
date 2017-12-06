import React, {Component} from 'react';
import {IndexLink, browserHistory} from 'react-router';
import {Grid, Row, Col, MenuItem} from 'react-bootstrap';

import droppointImage from '../../../images/droppoint.png';

export default function Project() {
    return (
        <div>
            <Row className="project">
                
                <Col md={6} sm={12} xs={12}>
                    <h3>Vælg afleverings-sted til pakke</h3>
                    <p>
                        Small project where you are able to choose where you want your package to be dropped off. <br/>
                        It's build with <a href="http://getbootstrap.com/">bootstrap</a> og <a href="https://jquery.com/">jQuery</a>. <br/> 
                        Data bliver taget fra <a href="http://bring.com/">bring</a> og <a href="http://shippii.com/">Shippii</a>, hvorefter det bliver vist på et map fra <a href="https://developers.google.com/maps/">Google Maps API</a>. <br/><br/>
                        Tid brugt: <strong>8 timer.</strong>
                    </p>
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <img src={droppointImage} />
                </Col>
            </Row>
        </div>
    )
}