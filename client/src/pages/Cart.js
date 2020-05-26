import React from "react";
import { Button, Table, Container } from "react-materialize";
import { Cart as ShoppingCart } from "../Components/CartTable/Cart.js";
import { Link } from "react-router-dom";


function Cart() {
  const checkoutBtn = () => {
    console.log("Checkout button clicked");
  };

  return (
    <div className="cart-container">
      <Container>
        <h4 style={{ textAlign: "left" }}>Shopping Cart</h4>
        <h6 style={{ textAlign: "left" }}>(Restaurant Name)</h6>
        <Table>
          <thead>
            <tr>
              <th data-field="name">Item Name</th>
              <th data-field="name">Quanitity</th>
              <th data-field="price">Item Price</th>
            </tr>
          </thead>
          <ShoppingCart />
        </Table>
        <Button onClick={checkoutBtn} style={{ marginBottom: "2rem" }}>
          <Link to="/">Checkout</Link>
        </Button>
      </Container>
    </div>
  );
}

export default Cart;
