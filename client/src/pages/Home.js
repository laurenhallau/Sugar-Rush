import React, { Component } from "react";
import SearchResults from '../Components/SearchResults/SearchResults';
import SearchArea from "../Components/SearchArea/SearchArea";

class Home extends Component {
 
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <SearchArea />
        <SearchResults/>
      </div>
    );
  }
}


export default Home;
