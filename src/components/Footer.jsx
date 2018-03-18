import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from './Social.jsx';
import './Footer.css';

class Footer extends Component {
  render () {
    return (
      <div className='footer-nav'>
        <div>
          Created by &copy; coatceatl ●  2018
        </div>
        <div>
          <Social />
        </div>
      </div>
    );
  }
}

export default Footer;
