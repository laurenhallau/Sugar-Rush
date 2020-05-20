import React, { Component } from "react";
import API from "../utils/API";

class SearchDetail extends Component {
  //functions
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount = () => {
    API.getRestaurants().then((data) => {
      this.setState({
        restaurants: data.data,
      });
    });
  };

  render() {
    return (
      <div className="searchDetail">
        {this.state.restaurants.map((item) => {
          return (
            <div>
              <h1>{item.name}</h1>
              <h3>Address: {item.location.address}</h3>
              <h4>City: {item.location.locality}</h4>
            

            </div>
          );
        })}
                      <div className="row">
              <div className="col s12">
                <ul className="tabs z-depth-1">
                  <li className="tab col s3"><a href="#test1">Test 1</a></li>
                  <li className="tab col s3"><a className="active" href="#test2">Test 2</a></li>
                  <li className="tab col s3"><a href="#test3">Test 4</a></li>
                  <li className="tab col s3"><a href="#test4">Test 4</a></li>
                </ul>
              </div>
              <div id="test1" className="col s12">Test 1</div>
              <div id="test2" className="col s12">Test 2</div>
              <div id="test3" className="col s12">Test 3</div>
              <div id="test4" className="col s12">Test 4</div>
            </div>
      </div>
    );
  }
}

export default SearchDetail;
