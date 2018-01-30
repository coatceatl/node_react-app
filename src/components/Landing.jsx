import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
} from 'react-bootstrap';


class Landing extends Component {
  render () {
    return (
      <div>
        <Carousel>
          <CarouselItem>
            <img width={1024} height={500} alt='rabbit' src='img/slide3.png' />
              <h3>First slide label</h3>
          </CarouselItem>
          <CarouselItem>
            <img width={1024} height={500} alt='rabbit' src='img/slide2.png' />
              <h3>Second slide label</h3>
          </CarouselItem>
          <CarouselItem>
            <img width={1024} height={500} alt='rabbit' src='img/slide4.png' />
              <h3>Third slide label</h3>
          </CarouselItem>
        </Carousel>
      </div>
    );
  }
}

export default Landing;
