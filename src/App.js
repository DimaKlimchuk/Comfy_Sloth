import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import styled from 'styled-components';
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  Private,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exat path="/">
          <Home />
        </Route>
        <Route exat path="/about">
          <About />
        </Route>
        <Route exat path="/cart">
          <Cart />
        </Route>
        <Route exat path="/products">
          <Products />
        </Route>
        <Router exat path="/products/:id" children={<SingleProduct />} />
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
