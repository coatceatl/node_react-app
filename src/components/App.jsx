import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
  //  Switch,
  //  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header.jsx';
import MainPage from './MainPage.jsx';
import Dashboard from './Dashboard.jsx';
import Footer from './Footer.jsx';
const Products = () => <h2>Products</h2>

/*
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
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Dashboard} />
            <Route path='/landing' component={MainPage} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
