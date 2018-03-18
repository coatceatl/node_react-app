import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Trigger from './Trigger.jsx';
import Wishlist from './Wishlist.jsx';
import Cart from './Cart.jsx';
import './Header.css';

import {
  Nav,
  Navbar,
  NavItem,
  Button,
  ButtonGroup,
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
        return (
          <ButtonGroup>
            <Button bsStyle='link'>
              <Wishlist />
            </Button>
            <Button bsStyle='link'className='cart'>
              <Cart />
            </Button>
            <Button bsStyle='link'>
              <Link to='/api/logout'>Logout</Link>
            </Button>
          </ButtonGroup>
        );
    }
  }

  render () {
    return (
      <header className='nav'>
        <div className='nav-main'>
          <div className='nav-left'>
            <Link to='#home'><img className='logo' width={100} height={100} src='img/Logo_blue1.png' /></Link>
          </div>
          <div className='nav-right'>
            <Link to='#'>{this.renderContent()}</Link>
          </div>
          <div className='nav-fill'>Get something special for that someone special</div>
        </div>
        <div className='nav-subnav'>
          <Link to='#'><span className='nav-content'>ANIMALS</span></Link>
          <Link to='#'><span className='nav-content'>DOLLS</span></Link>
          <Link to='#'><span className='nav-content'>CARTOON CHARACTERS</span></Link>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}


export default connect(mapStateToProps)(Header);
