import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

import {
  Navbar,
  NavItem,
  NavDropdown,
  Nav,
  MenuItem
} from 'react-bootstrap';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Loading...';
      case false:
        return (
          <li><a href='/auth/google'>Sign with Google</a></li>
        );
      default:
        return <li><a href='/api/logout'>Logout</a></li>;
    }
  }

  render () {
    return (

      /*
      <div className='container'>
        <nav className='navbar navbar-light bg-faded'>
  
            <h1 className='navbar-brand'>
              <a href='#home'>Funny Toys Amigurumi</a>
              {this.renderContent()}
            </h1>
          
        </nav>
      </div>

*/

      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Funny Toys Amigurumi</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
            {this.renderContent()}
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}


export default connect(mapStateToProps)(Header);
