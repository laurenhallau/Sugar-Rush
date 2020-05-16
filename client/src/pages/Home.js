import React, { Component } from "react";
import SearchResults from '../Components/SearchResults/SearchResults';

class Home extends Component {
 
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <SearchResults/>
      </div>
    );
  }
}


export default Home;
