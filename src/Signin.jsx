import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BodyParser from 'body-parser';

class Signin extends Component {
  render() {
    return (
      <div>
        <form className='form-signin'>
          <h2 className='form-signin-heading'>
            Please Sign In
          </h2>
        </form>
      </div>
    );
  }
}
