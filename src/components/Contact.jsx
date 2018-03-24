import React, { Component } from 'react';
import Modal from 'react-modal';
import FormModal from './FormModal.jsx';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Contact me!</button>
        <Modal isOpen={this.state.showModal}>
          <button onClick={this.handleCloseModal}>Closw Modal window</button>
        </Modal>
      </div>
    )
  }
}

export default Contact
