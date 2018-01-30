import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

import {
  Nav,
  Navbar,
  NavItem
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
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Funny Toys Amigurumi</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem>
              Get something special for that someone special
            </NavItem>
            <NavItem>
              {this.renderContent()}
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}


export default connect(mapStateToProps)(Header);
