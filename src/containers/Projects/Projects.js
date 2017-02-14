import React, {Component} from 'react';
import {IndexLink, browserHistory} from 'react-router';
import {Grid, Row, Col, MenuItem} from 'react-bootstrap';
import Contact from '../Contact/Contact'
import Project from './components/Project';

export default function Projects() {
    return (
        <div>
            <Col md={12} className="projects">
                <Grid>
                    <Row>
                        <Col md={12}>
                            <h2 className="text-center">Projects</h2>
                            <Project />
                        </Col>
                    </Row>
                </Grid>
            </Col>
            <Col md={12} className="contact">
                <Grid>
                    <Row>
                        <Col md={12}>
                            <Contact />
                        </Col>
                    </Row>
                </Grid>
            </Col>
        </div>
    )
}