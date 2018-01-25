import React, { Component } from 'react';

import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap';

class Header extends Component {
  render () {
    return (
      <div className='container'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#brand'>Funny Toys Amiguru</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href='#'>Sign in with Google</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
