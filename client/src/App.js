import React, { Component } from 'react'
import Clothes from './views/Clothes/Clothes'
import SingleProduct from './views/SingleProduct/SingleProduct'
import Cart from './views/Cart/Cart'
// import Navigation from './config/router'
import Nav from './components/Nav'
import All from './views/All/All'
import Technologies from './views/Tech/Tech'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CartProvider } from 'react-use-cart'
import './App.css'

export default class App extends Component {

  constructor() {
    super();
    // this.state = {
    //   client: createApolloClient()
    // }
  }

  render() {
    return (
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<All />} />
            <Route path='clothes' element={<Clothes />} />
            <Route path='technologies' element={<Technologies />} />
            <Route path='singleProduct/:id' element={<SingleProduct />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    )
  }
}