import React, { Component } from 'react';

const Toy = ({title, picture, description}) => {
  return(
    <div className='card open'>
      <div className='header'>
        {title}
      </div>
      <div className='body'>
        <img src={picture} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Toy
