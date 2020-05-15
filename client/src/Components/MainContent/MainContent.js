import React, { Component } from "react";
import SearchArea from "../SearchArea/SearchArea.js";
import SearchResultsCard from "../SearchResults/SearchResults.js";
import "./style.css";

class MainContent extends Component {
  render() {
    return (
      <div className="App">
        <SearchArea />
        <SearchResultsCard />
      </div>
    );
  }
}

export default MainContent;
