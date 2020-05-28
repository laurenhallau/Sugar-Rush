import React, { Component } from "react";
import { Cart as ShoppingCart } from "../Components/CartTable/Cart.js";
import API from "../utils/API";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  componentWillMount() {
    API.renderCart()
      .then((response) => {
        this.setState({ cart: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { cart } = this.state;
    return cart.map((item) => (
      <div className="container">
        <h1>Success!</h1>
        <h6>
          Your order is entered and on its way. Here's a review of your order
          contents:
        </h6>
        <thead>
          <tr>
            <th data-field="name" style={{ textAlign: "left" }}>
              Item Name
            </th>
            <th data-field="name" style={{ textAlign: "left" }}>
              Quantity
            </th>
            <th data-field="price" style={{ textAlign: "left" }}>
              Item Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>$ {item.price}</td>
          </tr>
        </tbody>
      </div>
    ));
  }
}

export default Checkout;

// function Checkout() {

//   const { cart } = [];
//   return cart.map((item) => (
//     <div className="container">
//       <h1>Success!</h1>
//       <h6>
//         Your order is entered and on its way. Here's a review of your order
//         contents:
//       </h6>
//       <tbody>
//         <tr>
//           <td>{item.description}</td>
//           <td>{item.quantity}</td>
//           <td>$ {item.price}</td>
//         </tr>
//       </tbody>
//     </div>
//   ));
// }

// export default Checkout;
