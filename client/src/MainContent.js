import React, { Component } from "react";
import SearchArea from "./SearchArea";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      restaurants: [],
      searchField: "",
    };
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div>
        <SearchArea handleSearch={this.handleSearch} />
      </div>
    );
  }
}

export default MainContent;
