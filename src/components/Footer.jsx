import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class Footer extends Component {
  render () {
    return (
      <div className='container'>
        <Grid>
          <Row className='show-grid'>
            <Col xs={6} md={4}>
              <h4>Instagram</h4>
            </Col>
            <Col xs={6} md={4}>
              <h4>Facebook</h4>
            </Col>
            <Col xs={6} md={4}>
              <h4>Logo</h4>
              <h6>Copyright 2018</h6>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Footer;
