import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {Layout, Projects, Contact} from './containers';

export default () => {
    return (
        <Route route="/">
            <Route path="/" component={Layout}>
                <IndexRoute component={Projects} />
            </Route>
        </Route>
    )
}