import React, { Component } from 'react';
import './App.css';

import ProductItem from './ProductItem'

const products = [
  {
    name: 'ipad',
    price: 400
  },
  {
    name: 'iphone',
    price: 900
  }
]

localStorage.setItem('products', JSON.stringify(products))

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentWillMount() {
    this.getProducts()
  }

  getProducts() {
    const products = JSON.parse(localStorage.getItem('products'))

    console.log(products)
    this.setState({ products })
  }

  render() {
    return (
      <div className="App">
       <h1>Product Manager</h1>
         {
           this.state.products.map(product => {
             return (
               <div key={product.name}>
                 <span>{product.name}</span>
                 {` | `}
                 <span>{product.price}</span>
                 {` | `}
                 <button>Delete</button>
               </div>
             )
           })
         }
      </div>
    );
  }
}

export default App;
