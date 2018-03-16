import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class Cart extends Component {
  render() {
    return (
      <div className='cart-icon'>
        <Glyphicon glyph='shopping-cart' /><a href='/api/cart'> Cart</a>
      </div>
    );
  }
}

export default Cart;
