import React from "react";
import "./App.css";
import Jumbotron from "./Components/Jumbotron/Jumbotron.js";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import SearchDetail from "./pages/SearchDetail";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/search" component={Search} />

          <Route exact path="/searchdetail" component={SearchDetail} />

          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
