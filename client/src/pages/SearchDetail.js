//import React, { useState, useEffect } from "react";
import React, { Component } from "react";
import API from "../utils/API";
import { Link, withRouter } from "react-router-dom";
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
      <div className="searchDetail container">
        <div>
          <h1>{this.state.item.name}</h1> 
         

          <div className="row">
            <div className="col s12">
              <ul
                ref={(Tabs) => {
                  this.Tabs = Tabs;
                }}
                className="tabs z-depth-1"
              >
                <li className="tab col s3 active">
                  <a href="#test1">About</a>
                </li>
                <li className="tab col s3">
                  <a href="#test2">
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
            </div>
            <div id="test2" className="col s12 ">
              <ul className="collection with-header">
                <li className="collection-header"><h3>Menu</h3></li>
                <li className="collection-item">
                  <div>
                   <p>{this.state.item.dessertOne.description}</p> 
                    <button onClick = {this.props.addToCart} data-desc={this.state.item.dessertOne.description} data-price={this.state.item.dessertOne.price} className="secondary=content">Add to Cart</button>
                  </div>
                </li>
                <li className="collection-item">
                  <div>
                  <p>{this.state.item.dessertTwo.description}</p> 
                    <button onClick = {this.props.addToCart} data-desc= {this.state.item.dessertTwo.description} data-price={this.state.item.dessertTwo.price} className="secondary=content">Add to Cart</button>
                  </div>
                </li>
              </ul>
            </div>
            <div id="test3" className="col s12">
              <h3>Pet Friendly?</h3>
              <h4>Yes!</h4>
            </div>
            <div id="test4" className="col s12">
              <h4>Great spot! 10/10!</h4> 
              <p>-Kelly</p>
              
              <form>
              <h4>Add your review!</h4>
                <div className="row">
                 
                <div className="input-field col s4">
                  <i className="material-icons prefix">border_color</i>
                  <input id="icon_mail" type="tel" className="validate" />
                  <label for="icon_mail" className="black-text">
                    Message
                  </label>
                </div>
                </div>
                <div className="row">
                <div className="input-field col s6">
                  <i className="material-icons prefix">account_box</i>
                  <input id="icon_mail" type="tel" className="validate" />
                  <label for="icon_mail" className="black-text">
                    Name
                  </label>
                </div>
              </div>
              <button className="btn">Submit</button>
            </form>
              
            </div>
          </div>
        </div>
        <Link to="/">← Back to Restaurants</Link>
      </div>
    );
  }
}

export default withRouter (SearchDetail);
