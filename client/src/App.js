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
import Contact from "./pages/Contact";
import SearchDetail from "./pages/SearchDetail";
import About from "./pages/About";
import PrivateRoute from "./Components/private-route/PrivateRoute";
import Dashboard from "./Components/dashboard/Dashboard";
import Checkout from "./pages/Checkout";
<<<<<<< HEAD
=======
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";

>>>>>>> b4a2508c96000724dc253ac5e1af99d0b3b25213
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
<<<<<<< HEAD
import M from "materialize-css";
=======
import API from "./utils/API";
>>>>>>> b4a2508c96000724dc253ac5e1af99d0b3b25213

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
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    };
  }

  state = {
    cart: [],
  };

 
  addToCart = (e) => {
    console.log("clicked!!")
    const dessert = {
      description: e.target.dataset.desc,
      price: e.target.dataset.price,
      quantity: 1,
    };
    this.setState({ cart: [...this.state.cart, dessert] });
    API.addToCart(this.state.cart).then(console.log(this.state.cart));
  };

<<<<<<< HEAD


=======
  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => this.setState({ done: true }));
    }, 2200);
    console.log("loading page");
  }
>>>>>>> b4a2508c96000724dc253ac5e1af99d0b3b25213
  render() {
    const loadStyle = {
      paddingLeft: "630px",
      paddingTop: "250px",
      backgroundColor: "#ee6e73",
    };
    return (
      <div>
        {!this.state.done ? (
          <div style={loadStyle}>
            <ReactLoading
              type={"balls"}
              color={"teal"}
              text="Loading your content..."
              height={"200px"}
              width={"200px"}
            />
          </div>
        ) : (
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

                  <Route exact path="/about" component={About} />

                  <Route exact path="/contact" component={Contact} />

                  <Route
                    exact
                    path="/restaurant/:id"
                    component={SearchDetail}
                  />

                  <Route exact path="/checkout" component={Checkout} />

                  <Route exact path="/cart" component={ShoppingCart} />
                  <Switch>
                    <PrivateRoute
                      exact
                      path="/dashboard"
                      component={Dashboard}
                    />
                  </Switch>
                </Switch>

                <Footer />
              </div>
            </Router>
          </Provider>
        )}
      </div>
    );
  }
}

export default App;
