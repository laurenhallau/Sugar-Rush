import React, { Component } from "react";
import SearchResults from '../Components/SearchResults/SearchResults';
import SearchArea from "../Components/SearchArea/SearchArea";

class Home extends Component {
 state = {
   searchResult: false
 }
 handleSearchRes = () => {
   console.log("searchRes");
   this.setState({
     searchResult: true
   })
 }
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <SearchArea handleSearchRes={this.handleSearchRes}/>
        <SearchResults searchRes={this.state.searchResult}/>
      </div>
    );
  }
}


export default Home;
