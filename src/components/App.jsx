import React, { Component } from 'react';

/*
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
import {Dashboard} from './Dashboard.jsx';

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Main Page!!!</Link></li>
        <li><Link to='/signin'>Sign in</Link></li>
        <li><Link to='/signup'>Sign up</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
      </ul>

      <hr />

      <Switch>
        <Route exact path='/' component={Header} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
*/

class App extends Component {
  render() {
    return (
      <div>
        <h1> Hello from App</h1>
      </div>
    );
  }
}

export default App;
