import React, { Component } from "react";
import { Button } from "react-materialize";
import "./style.css";


class SearchArea extends Component {
 handleButton = (e) => {
   e.preventDefault();
   console.log("this is", this);
 }
 render() {
  return (
    <div className="search-area">
      <form action="">
        <input type="text" placeholder="What are you craving?" />
        <Button onClick={this.handleButton}>Search</Button>
      </form>
    </div>
  );
 }
  
};


export default SearchArea;
