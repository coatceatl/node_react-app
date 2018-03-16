import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render () {
    return (
      <div className='footer-nav'>
          <div className="show-grid">
            Created by &copy; coatceatl ●  2018
          </div>
          <div>
            <a href='https://www.instagram.com/funny_toys_amiguru/'>
              <h4>Follow on Instagram</h4>
            </a>
          </div>
          <div>
            <a href='https://www.facebook.com/FunnyAmiguru/'>
              <h4>Like on Facebook</h4>
            </a>
          </div>
      </div>
    );
  }
}

export default Footer;
