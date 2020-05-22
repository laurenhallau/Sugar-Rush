import React, { Component } from "react";
import SearchResults from '../Components/SearchResults/SearchResults';
import SearchArea from "../Components/SearchArea/SearchArea";
import {Row} from 'react-materialize';

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
        <Row>
          <SearchResults searchRes={this.state.searchResult}/>
        </Row>
        
      </div>
    );
  }
}


export default Home;
