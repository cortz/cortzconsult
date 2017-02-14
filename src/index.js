import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import routes from './routes';

import './styles/site.css';

async function init() {
  ReactDOM.render(
    <Router history={browserHistory}>
      {routes()}
    </Router>,
    document.getElementById('root')
  );
}

init();