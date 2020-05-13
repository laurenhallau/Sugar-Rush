import React, { Component } from "react";
import "./style.css";
import { UserView } from "react-materialize";

const jumbotronStyle = {
  paddingBottom: "150px",
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
  backgroundImage: `url(${"./images/Sugar_Rush-background.jpg"})`,
  
};

class Jumbotron extends Component {
  render() {
    return (
      <div className="card-panel grey lighten-2" style={jumbotronStyle}>
        <div className="container white-text">
          <h1>Landing Page</h1>
          <p>Lorem ipsum dolor sit amet, consectetur...</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
