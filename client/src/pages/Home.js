import React, { Component } from "react";
import SearchResults from '../Components/SearchResults/SearchResults';
import SearchArea from "../Components/SearchArea/SearchArea";
import {Row} from 'react-materialize';
import API from "../utils/API";

class Home extends Component {
 state = {
   searchResult: false,
   searchQuery: "",
   restaurants: [],
   filteredRestaurant: []
 }
 componentDidMount = () => {

  API.getRestaurants().then( data => {
      this.setState({
        restaurants:data.data
      })
  })
};

 handleSearchRes = () => {
   console.log("searchRes");
   this.setState({
     searchResult: true
   })
  const filterTarget = this.state.searchQuery;
    let restaurantList = this.state.restaurants;
    let match = restaurantList.filter(i=>{
            // console.log(i.name)
            let restName = i.name.toLocaleLowerCase();
            console.log(restName)
            if (this.state.searchQuery !== restName){
              return 'No Match'
            };
           return restName

    })
    console.log('mathc', match)
  //  restaurantList =restaurantList.filter(i =>{
  //     let values = 
  //       .join("")
  //       .toLocaleLowerCase();
  //       // console.log("values", values)
  //       return values.indexOf(filterTarget.toLowerCase()) !== -1;
  //   })
  //   // this.setState({filteredRestaurant:restaurantList});
  //   console.log(restaurantList);
 }
 handleInputChange = event => {
  console.log("event", event.target);
  const { name, value } =  event.target.value
  this.setState({
    [name]: value
  })
 }

  render() {
    // console.log(this.state.searchQuery)
    return (
      <div>
        <h1>Home Page</h1>
        <SearchArea 
        handleSearchRes={this.handleSearchRes}
        handleInputChange={this.handleInputChange}
        searchQuery={this.state.searchQuery}
        />
        <Row>
          <SearchResults searchRes={this.state.searchResult}/>
        </Row>
        
      </div>
    );
  }
}


export default Home;
