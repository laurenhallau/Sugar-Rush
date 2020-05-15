import React from "react";
import { Table, Button } from "react-materialize";
import API from "../../utils/API.js"

  

class Cart extends React.Component {

componentWillMount() {
    API.getMongoData().then(response => {
      console.log('Data fetched', response)
      this.setState({
        data: response
      })
    })
}
    
  render() {
    return (
      <div className="container">
        <h3 style={{ textAlign: "left" }}>Shopping Cart</h3>
        <h5 style={{ textAlign: "left" }}> (Restaurant Name)</h5>
        <Table>
          <thead>
            <tr>
              <th data-field="id">Item Name</th>
              <th data-field="quantity">Quantity</th>
              <th data-field="price">Item Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Button>Checkout</Button>
      </div>
    );
  }
}

export default Cart;
