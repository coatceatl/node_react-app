import React, { Component } from 'react';
import { connect } from 'react-redux';
import Trigger from './Trigger.jsx';
import './Header.css';

import {
  Nav,
  Navbar,
  NavItem,
  Button,
  Glyphicon
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
        return <Button bsStyle='link'><a href='/api/logout'>Logout</a></Button>;
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
                <div className='signin'>
                  <a href='#'>About</a>
                  <Button bsStyle='link'>
                    <Glyphicon glyph="heart-empty" /> Wishlist
                  </Button>
                  <Button bsStyle='link'>
                    <Glyphicon glyph="shopping-cart" /> Cart
                  </Button>
                  <a href='#'>{this.renderContent()}</a>
                </div>
              </div>
              <div className='nav-fill'>Get something special for that someone special</div>
              </div>
            <div id='nav-subnav'>
              <a href='#'><span className='nav-content'>ANIMALS</span></a>
              <a href='#'><span className='nav-content'>DOLLS</span></a>
              <a href='#'><span className='nav-content'>CARTOON CHARACTERS</span></a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}


export default connect(mapStateToProps)(Header);
