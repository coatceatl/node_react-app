import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import {Header} from './Header.jsx';
import {Signin} from './Signin.jsx';
import {Signup} from './Signup.jsx';

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Main Page!!!</Link></li>
        <li><Link to='/signin'>Sign in</Link></li>
        <li><Link to='/signup'>Sign up</Link></li>
      </ul>

      <hr />

      <Switch>
        <Route exact path='/' component={Header} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
