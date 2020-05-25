//import React, { useState, useEffect } from "react";
import React, { Component, useState, useEffect, setItem } from "react";
import API from "../utils/API";
import { Link, withRouter, useParams } from "react-router-dom";
import M from "materialize-css";


class SearchDetail extends Component {
  //const [item, setItem];
  
  constructor(props) {
    super(props);
    this.state = {
      
      item: {
        location: {},
        dessertOne:{},
        dessertTwo:{},
        phone_number:{}
      },
    };
  }
  
  componentDidMount = () => {
  // NEED ID FROM BUTTON TO KNOW WHICH RESTAURANT INFO TO DISPLAY
  const id = this.props.match.params.id;

  
      API.getRestaurant(id)
        .then(results => {
          console.log(results.data[0])
          this.setState({
            item: results.data[0],
          })
        })
       


      // INITIALIZE TABS FOR MATERIALIZE
      M.Tabs.init(this.Tabs);
  };



  render() {
    
    return (
      <div className="searchDetail">
        <div>
          <h1>{this.state.item.name}</h1> 
          <h3>Address: {this.state.item.location.address}</h3>
        <h4>City: {this.state.item.location.locality}</h4> 

          <div className="row">
            <div className="col s12">
              <ul
                ref={(Tabs) => {
                  this.Tabs = Tabs;
                }}
                className="tabs z-depth-1"
              >
                <li className="tab col s3">
                  <a href="#test1">About</a>
                </li>
                <li className="tab col s3">
                  <a className="active" href="#test2">
                    Order
                  </a>
                </li>
                <li className="tab col s3">
                  <a href="#test3">Pet Friendly?</a>
                </li>
                <li className="tab col s3">
                  <a href="#test4">Reviews</a>
                </li>
              </ul>
            </div>
            <div id="test1" className="col s12">
              <h2>{this.state.item.name}</h2>
              <h5>{this.state.item.location.address}</h5>
              <p>Phone Number</p>
            </div>
            <div id="test2" className="col s12 ">
              <ul className="collection with-header">
                <li className="collection-header">Menu</li>
                <li className="collection-item">
                  <div>
                   <p>{this.state.item.dessertOne.description}</p> 
                    {/* <a href="" className="secondary=content">Add to Cart</a> */}
                  </div>
                </li>
                <li className="collection-item">
                  <div>
                  <p>{this.state.item.dessertTwo.description}</p> 
                    {/* <a href="" className="secondary=content">Add to Cart</a> */}
                  </div>
                </li>
              </ul>
            </div>
            <div id="test3" className="col s12">
              <h4>Yes!</h4>
            </div>
            <div id="test4" className="col s12">
              <h4>Great spot! 10/10!</h4> <p>-Kelly from St. Louis Park</p>
            </div>
          </div>
        </div>
        <Link to="/">← Back to Restaurants</Link>
      </div>
    );
  }
}

export default withRouter (SearchDetail);
