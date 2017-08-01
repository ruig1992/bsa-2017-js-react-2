import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {IndexRoute, Route, Router, browserHistory} from 'react-router';
import App from './src/App';
import Home from './src/pages/Home';
import Users from './src/pages/Users';

render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="users" name="users" component={Users} />
    </Route>
  </Router>)
  , document.getElementById('root')
)
