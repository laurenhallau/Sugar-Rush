import React, { Component } from "react";
import "./style.css";


const jumbotronStyle = {
  paddingBottom: "150px",
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
  backgroundImage: `url(${"./images/Sugar_Rush-background.jpg"})`,
  height: "400px"
  
};

class Jumbotron extends Component {
  render() {
    return (
      <div className="card-panel grey lighten-2" style={jumbotronStyle}>
        <div className="container white-text">
          <h1>Sugar Rush</h1>
          <p>Desserts. Delivered.</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
