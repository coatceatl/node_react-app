import React, { Component } from 'react';

class MainPage extends Component {
  render () {
    return (
      <div className='page'>This is a MAIN page!!!
        <p>
          <a href='/favorites'>View all favorites products</a>
        </p>
      </div>
    );
  }
}

export default MainPage;
