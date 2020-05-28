import React, { Component } from "react";
import uuid from "uuid";
import API from "../../utils/API";

export class Cart extends Component {
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

    // items: [
    //   { id: uuid(), item: { name: "Cookie", quantity: 12, price: 10.0 } },
    //   { id: uuid(), item: { name: "Pie", quantity: 12, price: 10.0 } },
    //   { id: uuid(), item: { name: "Ice Cream", quantity: 12, price: 10.0 } },
    //   { id: uuid(), item: { name: "Cupcake", quantity: 12, price: 10.0 } },
    // ],
  }

  render() {
    console.log(this.state);
    const changeQuantity = (id, amount) => {
      console.log("add button clicked!");
      console.log("id: " + id);
      let newItem = this.state.cart.find((cart) => cart._id === id);
      newItem.quantity = newItem.quantity + amount;
      this.setState((prevState) => ({
        cart: prevState.cart.map((item) => {
          if (item._id === id) {
            return newItem;
          }
          return item;
        }),
      }));
    };
    const increment = (id) => {
      changeQuantity(id, 1)
    };

    const decrement = (id) => {
      console.log("Subtract button clicked");
      changeQuantity(id, -1)
    };

    const clear = (id) => {
      console.log("Clear button clicked");
      const newCart = this.state.cart.filter(c => c._id !== id)
      this.setState({cart: newCart})
      const cartToRemove = this.state.cart.find(c => c._id === id)
      API.removeFromCart(cartToRemove)
      
    };

    const { cart } = this.state;
    return cart.map((item) => (
      <tbody>
        <tr>
          <td>{item.description}</td>
          <td>
            <i
              className="tiny material-icons"
              style={{ margin: "0px 5px" }}
              onClick={() => decrement(item._id)}
            >
              remove_circle_outline
            </i>
            {item.quantity}
            <i
              className="tiny material-icons"
              style={{ margin: "0px 5px" }}
              onClick={() => increment(item._id)}
            >
              add_circle_outline
            </i>
          </td>
          <td>$ {item.price}</td>
          <td>
            <i className="tiny material-icons" onClick={() => clear(item._id)}>
              clear
            </i>
          </td>
        </tr>
      </tbody>
    ));
  }
}
