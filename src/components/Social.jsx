import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialLinks: [
        {
          name: 'Instagram',
          fa: 'fab fa-instagram',
          link: 'https://www.instagram.com/funny_toys_amiguru/'
        },
        {
          name: 'Facebook',
          fa: 'fab fa-facebook',
          link: 'https://www.facebook.com/FunnyAmiguru/'
        },
      ]
    }
  }

  render() {
    const socialLinks = this.state.socialLinks;
    return(
      <div className='social-links'>
        {socialLinks.map(social =>
          <div className='social-link' key={social.name}>
            <a
              href={social.link}
              fa={social.fa}
              target='_blank'
            >
              <i className={`fa ${social.fa}`}aria-hidden="true"></i></a>
          </div>
        )}
      </div>
    );
  }
}

export default Social
