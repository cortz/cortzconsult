import React, {Component} from 'react';
import {IndexLink, browserHistory} from 'react-router';
import Contact from '../Contact/Contact'

export default function Projects() {
    return (
        <div>
            <div className="projects">
                <h2>Projects</h2>
            </div>
            <div className="contact">
                <Contact />
            </div>
        </div>
    )
}