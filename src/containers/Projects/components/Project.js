import React, {Component} from 'react';
import {IndexLink, browserHistory} from 'react-router';
import {Grid, Row, Col, MenuItem} from 'react-bootstrap';

export default function Project() {
    return (
        <div>
            <Row className="project">
                <Col md={6}>
                    <h3>Shippii</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et sagittis felis. Quisque sed iaculis tellus. Duis sit amet dolor ut tortor porttitor accumsan. Pellentesque venenatis, risus non convallis rutrum, felis felis pharetra lacus, at imperdiet arcu augue quis tellus. Nam tincidunt bibendum venenatis. Suspendisse eu convallis nisi, vel consectetur sem. Ut sagittis dignissim auctor. Donec pulvinar gravida accumsan. Maecenas porttitor in arcu non ultricies.

                        rhoncus. Vestibulum porttitor auctor orci, sed ornare dolor ultrices non. Nulla non massa fermentum quam tempor tincidunt at eget purus. Pellentesque at augue a dolor mattis varius id ut justo. Maecenas eu urna id nisl interdum tristique et quis nunc. Ut eu consectetur nunc. Nam at posuere orci.
                    </p>
                    <p>
                        <cite><span>“</span> Mads er en rigtig dygtig udvikler, tak for alt!<span>”</span></cite>
                    </p>
                </Col>
                <Col md={6}>
                    <img src="https://digitalsynopsis.com/wp-content/uploads/2014/03/how-to-create-a-website-feature-image.jpg" />
                </Col>
            </Row>
            <Row className="project">
                <Col md={6}>
                    <img src="https://digitalsynopsis.com/wp-content/uploads/2014/03/how-to-create-a-website-feature-image.jpg" />
                </Col>
                <Col md={6}>
                    <h3>Shippii</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et sagittis felis. Quisque sed iaculis tellus. Duis sit amet dolor ut tortor porttitor accumsan. Pellentesque venenatis, risus non convallis rutrum, felis felis pharetra lacus, at imperdiet arcu augue quis tellus. Nam tincidunt bibendum venenatis. Suspendisse eu convallis nisi, vel consectetur sem. Ut sagittis dignissim auctor. Donec pulvinar gravida accumsan. Maecenas porttitor in arcu non ultricies.
                    </p>
                    <p>
                        <cite><span>“</span> Mads er en rigtig dygtig udvikler, tak for alt! Jeg vil gå så langt og sige, at han er en rigtig guttermand!<span>”</span></cite>
                    </p>
                </Col>
            </Row>
        </div>
    )
}