import React, { Component } from "react";
import { Col, Card, Icon, CardTitle, Button } from "react-materialize";
import API from "../../utils/API";
import "./style.css";


class SearchResultsCard extends Component {
//Create a State Object 
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
  }
  
  
  componentDidMount = () => {

    API.getRestaurants().then( data => {
        this.setState({
          restaurants:data.data
        })
    })
  };

  renderCard=()=>{

   return this.state.restaurants.map(item =>{
      return <div>
            <Col m={4} s={12}>
               <Card
                className="restaurant-card"
                actions={[<Button>Order Now</Button>]}
                closeIcon={<Icon>close</Icon>}
                header={
                  <CardTitle image="https://materializecss.com/images/sample-1.jpg">
                    Restaurant Type (donuts, cupcakes etc..)
                  </CardTitle>
                }
                revealIcon={<Icon>more_vert</Icon>}
              >
                <ul>
                  <li className="restaurant-name">{item.name}</li>
                  <br />
                  <li> Phone: {item.phone_number}</li>
                  <br />
                  <li> Address: {item.location.address} <br/> {item.location.locality}</li>
                  <br />
                  <li>
                    Rating:{" "}
                    {<Icon className="5-stars">starsstarsstarsstarsstars</Icon>}
                  </li>
                </ul>
              </Card>
            </Col>
            </div>
    })

   
  }
  render() {
//  console.log("props", this.props);
    //Dot notate through the state object 
   
    return (
      <div className='container'>
      {this.props.searchRes ?
        this.renderCard()
    :
      <text></text>
       }
     
      </div>
    );
  }
}

export default SearchResultsCard;
