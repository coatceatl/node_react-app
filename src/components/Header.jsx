import React, { Component } from 'react';
import { connect } from 'react-redux';

{/*
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap';

*/}

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
      <div className='container'>
        <h2>Funny Toys Amiguru</h2>
        <ul>
          {this.renderContent()}
        </ul>
        {/*
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#brand'>Funny Toys Amiguru</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.renderContent()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        */}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}


export default connect(mapStateToProps)(Header);
