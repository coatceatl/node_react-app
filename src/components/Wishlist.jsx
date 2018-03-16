import React, { Component } from 'react';

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishes: [
        {id:1, wish: 'Sleepy Foxy'},
        {id:2, wish: 'Mint Cat'}
      ]
    };
  }

  render() {
    return (
      <div className='wish-icon'>
        <a href='/api/wishlist'>Wishlist</a>
      </div>
    );
  }
}

export default Wishlist
