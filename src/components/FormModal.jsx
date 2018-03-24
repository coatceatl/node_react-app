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
          </div>
        </form>
      </div>
    );
  }
}

export default FormModal
