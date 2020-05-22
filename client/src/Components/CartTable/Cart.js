import React, { Component } from "react";
import uuid from "uuid";

export class Cart extends Component {
  state = {
    items: [
      { id: uuid(), item: { name: "Cookie", quantity: 12, price: 10.0 } },
      { id: uuid(), item: { name: "Pie", quantity: 12, price: 10.0 } },
      { id: uuid(), item: { name: "Ice Cream", quantity: 12, price: 10.0 } },
      { id: uuid(), item: { name: "Cupcake", quantity: 12, price: 10.0 } },
    ],
  };

  render() {
    const increment = () => {
      console.log("Add button clicked");
    };

    const decrement = () => {
      console.log("Subtract button clicked");
    };

    const clear = () => {
      console.log("Clear button clicked");
    };

    const { items } = this.state;
    return items.map(({ item }) => {
      return (
        <tbody>
          <tr>
            <td>{item.name}</td>
            <td>
              <i className="tiny material-icons" style={{ margin: "0px 5px" }} onClick={decrement}>
                remove_circle_outline
              </i>
              {item.quantity}
              <i className="tiny material-icons" style={{ margin: "0px 5px" }} onClick={increment}>
                add_circle_outline
              </i>
            </td>
            <td>{item.price}</td>
            <td>
              <i className="tiny material-icons" onClick={clear}>
                clear
              </i>
            </td>
          </tr>
        </tbody>
      );
    });
  }
}
