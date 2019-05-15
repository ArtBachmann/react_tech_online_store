import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";
import Contact from "./pages/ContactPage";
import Default from "./pages/DefaultPage";
import Cart from "./pages/CartPage";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, cart, footer */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/products/:id" exact component={SingleProduct} />
          <Route path="/products" exact component={Products} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/cart" exact component={Cart} />
          <Route component={Default} />
        </Switch>
      </>
    );
  }
}

export default App;
