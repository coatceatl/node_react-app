import React, { Component } from 'react';
import {
  Button,
  Modal
  } from 'react-bootstrap';


class Trigger extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div className='modal-container' style={{ height: 200 }}>
        <Button
          bsStyle='primary'
          bsSize='large'
          onClick={() => this.setState({ show: true })}
        >
          Sign in
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby='contained-modal-title'
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title'>
              Funny Toys Amiguru
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button bsStyle="primary"><a href='/auth/facebook'>Sign in with Facebook</a></Button>
            <Button bsStyle="danger"><a href='/auth/google'>Sign with Google</a></Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Trigger;
