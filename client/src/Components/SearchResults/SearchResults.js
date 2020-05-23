import React, { Component } from "react";
import { Col, Card, Icon, CardTitle, Button } from "react-materialize";
import API from "../../utils/API";
import "./style.css";
import {Link} from 'react-router-dom';


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

    let imageStyle ={
      height:200,
      width:250,
      margin:20
    }

    let CardStyle={
      width:340,
      height:600
    }

   return this.state.restaurants.map(item =>{
     console.log("jack", item)
      return (<div>
            <Col m={4} s={12}>
               <Card
                className="restaurant-card"
               
                actions={[<Button id={item.id}><Link to={"/restaurant/" + item.id}>Order Now</Link></Button>]}
                closeIcon={<Icon>close</Icon>}
                style={CardStyle}
                header={
                  <CardTitle key ={item.id} image={item.img} style={imageStyle} />
                
                }
                revealIcon={<Icon>more_vert</Icon>}
              >
                <hr/>
                <ul>
                  <li className="restaurant-name">{item.name}</li>
                  <br />
                  <li> Phone: {item.phone_number}</li>
                  <br />
                  <li> Address: {item.location.address} <br/> {item.location.locality}</li>
                  <br />
                  <li>
                    Rating:{" "}
                    {<Icon key={item.id} className="5-stars">starsstarsstarsstarsstars</Icon>}
                  </li>
                  <li>Known for: {item.dessertOne.description}</li>
                </ul>
              </Card>
            </Col>
            </div>)
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
