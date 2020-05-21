import React, { Component } from "react";
import API from "../utils/API";
import M from "materialize-css";
//import axios from 'axios'

// function SearchDetail(){
//   useEffect(() => {
//   //  axios.get("/api/restaurant/:id")
//   },[])

  

// }


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
    M.Tabs.init(this.Tabs)
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
                <ul ref={Tabs => {
                    this.Tabs = Tabs;
                }}
                className="tabs z-depth-1">
                  <li className="tab col s3"><a href="#test1">About</a></li>
                  <li className="tab col s3"><a className="active" href="#test2">Order</a></li>
                  <li className="tab col s3"><a href="#test3">Pet Friendly?</a></li>
                  <li className="tab col s3"><a href="#test4">Reviews</a></li>
                </ul>
              </div>
              <div id="test1" className="col s12">
                  
                 <h2>Restaurant Name Example</h2>
                 <h5>We proudly handmake fresh donuts every morning!</h5>
                 <p>Place an order using the order tab!</p>
                  </div>
              <div id="test2" className="col s12 ">
                  <ul className="collection with-header">
                      <li className="collection-header">Menu</li>
                      <li className="collection-item"><div>Donut 
                          {/* <a href="" className="secondary=content">Add to Cart</a> */}
                          </div></li>
                      <li className="collection-item"><div>Cookie 
                          {/* <a href="" className="secondary=content">Add to Cart</a> */}
                          </div></li>
                  </ul>
              </div>
              <div id="test3" className="col s12"><h4>Yes!</h4></div>
              <div id="test4" className="col s12"><h4>Great spot! 10/10!</h4> <p>-Kelly from St. Louis Park</p></div>
            </div>
      </div>
    );
  }
}

export default SearchDetail;


