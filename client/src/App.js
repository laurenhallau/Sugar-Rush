import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./Components/Jumbotron/Jumbotron.js";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Register from "./Components/auth/Register.js";
import Login from "./Components/auth/Login.js";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Home from "./pages/Home";
import ShoppingCart from "./pages/Cart.js";
import Search from "./pages/Search";
import SearchDetail from "./pages/SearchDetail";
import PrivateRoute from "./Components/private-route/PrivateRoute";
import Dashboard from "./Components/dashboard/Dashboard";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Jumbotron />
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/register" component={Register} />

              <Route exact path="/login" component={Login} />

              <Route exact path="/search" component={Search} />

              <Route exact path="/searchdetail" component={SearchDetail} />

              <Route exact path="/cart" component={ShoppingCart} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
