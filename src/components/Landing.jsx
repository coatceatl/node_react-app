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
            <img width={1024} height={600} alt='koala' src='img/slide_koala1.png' />
              <h3>Koala</h3>
          </CarouselItem>
          <CarouselItem>
            <img width={1024} height={600} alt='lamb' src='img/slide_lamb.png' />
              <h3>Lamb</h3>
          </CarouselItem>
          <CarouselItem>
            <img width={1024} height={600} alt='doll' src='img/slide_doll1.png' />
              <h3>Doll</h3>
          </CarouselItem>
          <CarouselItem>
            <img width={1024} height={600} alt='cat' src='img/slide_cat.png' />
            <h3>Cat</h3>
          </CarouselItem>
        </Carousel>
      </div>
    );
  }
}

export default Landing;
