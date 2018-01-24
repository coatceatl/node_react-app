import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BodyParser from 'body-parser';
import axios from 'axios';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  signIn() {
    axios.post('/signin', {
      email: this.state.email,
      password: this.state.password
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleEmailChange(event) {
    this.setState({ email:event.target.value })
  }
  handlePasswordChange(event) {
    this.setState({ password:event.target.value })
  }

  render() {
    return (
      <div>
        <form className='form-signin'>
          <h2 className='form-signin-heading'>
            Please Sign In
          </h2>
          <input
            type='email'
            onChange={this.handleEmailChange}
            placeholder='E-mail'
            value={this.state.email}
            required
          />
          <input
            type='password'
            onChange={this.handlePasswordChange}
            placeholder='Password'
            value={this.state.password}
            required
          />
          <button className='btn btn-lg'
            onClick={this.signIn}
            type='button'
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Signin;
