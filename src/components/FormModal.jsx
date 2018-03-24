import React, { Component } from 'react';

class FormModal extends Component {
  render() {
    return(
      <div className='contact-form'>
        <form>
          <h1>Contact me</h1>
          <div className='form-items'>
            <div className='button-holders'>
              Name
            </div>
            <input type='text' name='name' />
          </div>
          <div className='form-items'>
            <div className='button-holders'>
              Email
            </div>
            <input type='text' name='email' />
          </div>
          <div className='form-items'>
            <div className='button-holders'>
              Your Message
            </div>
            <input type='text' name='message' />
          </div>
          <button type='submit'>Send</button>
        </form>
      </div>
    );
  }
}

export default FormModal
