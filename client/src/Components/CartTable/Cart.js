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
    const { items } = this.state;
    return items.map(({ item }) => {
      return (
        <tbody>
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        </tbody>
      );
    });
  }
}
