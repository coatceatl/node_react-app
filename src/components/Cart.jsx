import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div className='cart-icon'>
        <a href='/api/cart'> My Cart</a>
      </div>
    );
  }
}

export default Cart;
