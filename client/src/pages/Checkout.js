import React from "react";

function Checkout() {
  return (
    <div className="container">
      <h1>Success!</h1>
      <h6>
        Your order is entered and on its way. Here's a review of your order
        contents:
      </h6>
      <ul>
        <li>Order item #1</li>
        <li>Order item #2</li>
        <li>Order item #3</li>
      </ul>
    </div>
  );
}

export default Checkout;
