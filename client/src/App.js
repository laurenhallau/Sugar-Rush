import React from "react";
import "./App.css";
import Jumbotron from "./Components/Jumbotron/Jumbotron.js"
import Header from "./Components/Header/Header.js"
import Footer from "./Components/Footer/Footer.js"
// import { BrowserRouter as Switch, Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Footer />
   
    </div>
  );
}

export default App;
