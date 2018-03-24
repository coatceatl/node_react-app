import React, { Component } from 'react';
import Modal from 'react-modal';
import FormModal from './FormModal.jsx';

const customStyle = {
  content: {
    position: 'relative',
    top: '300px',
    left: '600px',
    width: '500px'
  }
}

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
        <button
          onClick={this.handleOpenModal}
        >
          Contact me!
        </button>
        <Modal
          isOpen={this.state.showModal}
          style={customStyle}
        >
          <FormModal />
          <button
            onClick={this.handleCloseModal}
          >
            Close Modal window
          </button>
        </Modal>
      </div>
    )
  }
}

export default Contact
