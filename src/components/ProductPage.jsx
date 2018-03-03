import React, { Component } from 'react';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] }
  }

  componentDidMount() {
    fetch('/products')
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }
  render () {
    return (
      <div>
        <h2>ProductPage</h2>
        <ul>
          {this.state.products.map(product =>
            <li key={products.id}>{product.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default ProductPage
