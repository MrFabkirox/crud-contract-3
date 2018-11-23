import React, { Component } from 'react';
import './App.css';

class ProductItem extends Component {

  render() {
      const { name, price } = this.props;

    return (
      <div >
        {` | `}
      </div>
    )
  }

}

export default ProductItem;
