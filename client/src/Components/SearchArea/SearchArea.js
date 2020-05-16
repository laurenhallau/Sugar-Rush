import React from "react";
import { Button } from "react-materialize";
import "./style.css";

const SearchArea = (props) => {
  return (
    <div className="search-area">
      <form action="">
        <input onChange={props.handleSearch} type="text" placeholder="What are you craving?" />
        <Button onClick={}>Search</Button>
      </form>
    </div>
  );
};

export default SearchArea;
