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
      <Navbar className='app-navbar'>
        <Navbar.Header className='app-header'>
          <Navbar.Brand className='app-brand'>
            <a href="#home">Funny Toys Amigurumi</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <h1>
            Get something special for that someone special
          </h1>
        </Nav>

        <Nav pullRight className='nav-item'>
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
