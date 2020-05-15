import React from "react";
import { Row, Col, Card, Icon, CardTitle, Button } from "react-materialize";
import db from "../../utils/API";
import "./style.css";

class SearchResultsCard extends React.Component {
  render() {
    return (
      <Row>
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
              <li className="restaurant-name">Restaurant Name</li>
              <br />
              <li> Phone: (xxx)xxx-xxxx</li>
              <br />
              <li> Address: xxxxxxxx</li>
              <br />
              <li>
                Rating:{" "}
                {<Icon className="5-stars">starsstarsstarsstarsstars</Icon>}
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
      //   <Row>
      //     <Col m={4} s={12}>
      //       <Card
      //         closeIcon={<Icon>close</Icon>}
      //         header={
      //           <CardTitle
      //             image="https://materializecss.com/images/sample-1.jpg"
      //             className="card-image"
      //           >
      //           </CardTitle>
      //         }
      //         horizontal
      //         revealIcon={<Icon>more_vert</Icon>}
      //       >
      //         <ul>
      //           <li className="restaurant-name">Restaurant Name</li>
      //           <br/>
      //           <li> Phone: (xxx)xxx-xxxx</li>
      //           <br/>
      //           <li> Address: xxxxxxxx</li>
      //           <br />
      //           <li>
      //             Rating: {<Icon className="5-stars">starsstarsstarsstarsstars</Icon>}
      //           </li>
      //         </ul>

      //         <br />
      //         <Button className="order-btn">Order Now</Button>
      //       </Card>
      //     </Col>
      //   </Row>
    );
  }
}

export default SearchResultsCard;
