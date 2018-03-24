import React, { Component } from 'react';
import Modal from 'react-modal';
import FormModal from './FormModal.jsx';

class Contact extends Component {
  render() {
    return (
      <div>
        <button>Contact me!</button>
        <FormModal />
      </div>
    )
  }
}

export default Contact
