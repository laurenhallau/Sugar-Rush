import axios from "axios";
const BASEURL = "https://developers.zomato.com/api/v2.1/search?q=";
const APIKEY = "3ee3d740dc7385dd0034e55132458a30";

// Export an object with a "search" method that searches the Giphy API for the passed query

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  getRestaurant: function(id){
      return axios.get("/api/restaurant/"+id)
  },
  getRestaurants: function (req, res) {
    console.log("Line 12 in API.js");
    // return axios.get(BASEURL + query + APIKEY);
    return axios.get("/api/restaurant")
  },
  getMongoData: function(query){
    return axios.get("mongodb://localhost/reactsugarrush")
    .then(function(response) {
      if (response.status === 200 && response != null) {
        var data = response.data.name
        return data
      } else {
        throw new Error('Empty data')
      }
    })
    .catch(function(error) {
      console.log(error)
      return [] // Return empty array in case error response.
    })
  }
};
