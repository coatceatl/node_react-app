import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';

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
        <Glyphicon glyph='heart-empty' /><Link to='/api/wishlist'> Wishlist</Link>
      </div>
    );
  }
}

export default Wishlist
