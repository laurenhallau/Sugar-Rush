import axios from "axios";

const BASEURL = "https://developers.zomato.com/api/v2.1/search?entity_id=305&entity_type=city&cuisines=100";
// const APIKEY = "3ee3d740dc7385dd0034e55132458a30";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
