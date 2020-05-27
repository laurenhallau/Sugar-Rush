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
  const filterTarget = this.state.searchQuery.toLocaleLowerCase()
    let restaurantList = this.state.restaurants;
    console.log('Thisis our filter Target', filterTarget)
    let match = restaurantList.filter(i=>{

            let restName = i.name.substring(0, filterTarget.length).toLocaleLowerCase()
            if (filterTarget === restName){
              return restName
            };
      
            // console.log(i.name)
        
          // return restName

    })
    console.log('mathc', match)
  //  restaurantList =restaurantList.filter(i =>{
  //     let values = 
  //       .join("")
  //       .toLocaleLowerCase();
  //       // console.log("values", values)
  //       return values.indexOf(filterTarget.toLowerCase()) !== -1;
  //   })
   this.setState({filteredRestaurant: match});
  //   console.log(restaurantList);
 }
 handleInputChange = event => {
  console.log("event", event.target);
  const { name, value } =  event.target
  this.setState({
    [name]: value
  }, function() {
    this.handleSearchRes()
  })
 }

  render() {

     console.log(this.state)
    return (
      <div>
        <h1>Home Page</h1>
        <SearchArea 
        handleSearchRes={this.handleSearchRes}
        handleInputChange={this.handleInputChange}
        searchQuery={this.state.searchQuery}
        />
        <Row>
          <SearchResults searchRes={this.state.filteredRestaurant}/>
        </Row>
        
      </div>
    );
  }
}


export default Home;
