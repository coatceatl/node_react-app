import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class Footer extends Component {
  render () {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <a href='#home'><img className='logo' width={100} height={100} src='img/Logo_blue1.png' /></a>
              <h6>Copyright © 2018</h6>
            </Col>
            <Col xs={6} md={4}>
              <a href='https://www.instagram.com/funny_toys_amiguru/'>
                <h4>Follow on Instagram</h4>
              </a>
            </Col>
            <Col xs={6} md={4}>
              <a href='https://www.facebook.com/FunnyAmiguru/'>
                <h4>Like on Facebook</h4>
              </a>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default Footer;
