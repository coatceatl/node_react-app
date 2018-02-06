import React, { Component } from 'react';
import { connect } from 'react-redux';
import Trigger from './Trigger.jsx';
import './Header.css';

import {
  Nav,
  Navbar,
  NavItem,
  } from 'react-bootstrap';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Loading...';
      case false:
        return (
          <div>
            <Trigger />
          </div>
        );
      default:
        return <li><a href='/api/logout'>Logout</a></li>;
    }
  }

  render () {
    return (
      <div>
        <header>
          <div id='navbar'>
            <div id='nav-main'>
              <div className='nav-left'>
                <a href='#home'><img className='logo' width={100} height={100} src='img/Logo_blue1.png' /></a>
              </div>
              <div className='nav-right'>
                <div className='container'>
                  <a href='#'>{this.renderContent()}</a>
                  <a href='#'>Orders</a>
                  <a href='#'>Cart</a>
                </div>
              </div>
              <div className='nav-fill'>Get something special for that someone special</div>
              </div>
            <div id='nav-subnav'>
              <a href='#'><span className='nav-content'>CATS</span></a>
              <a href='#'><span className='nav-content'>RABBITS</span></a>
              <a href='#'><span className='nav-content'>DOLLS</span></a>
              <a href='#'><span className='nav-content'>FOXES</span></a>
              <a href='#'><span className='nav-content'>LAMBS</span></a>
              <a href='#'><span className='nav-content'>KOALAS</span></a>
              <a href='#'><span className='nav-content'>CARTOON CHARACTERS</span></a>
            </div>
          </div>
        </header>
      </div>

            /*

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Funny Toys Amigurumi</a>
            </Navbar.Brand>
          </Navbar.Header>
          <p className='NavbarText'>
            Get something special for that someone special
          </p>
          {this.renderContent()}
        </Navbar>
      </div>

*/

    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}


export default connect(mapStateToProps)(Header);
