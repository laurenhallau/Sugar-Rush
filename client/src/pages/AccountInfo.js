import React, { Component } from "react";
import { TextInput, Button, Checkbox } from "react-materialize";
import API from "../utils/API";

class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
    };
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick = (e) => {
    this.setState({ saved: true });
    const paymentData = {
      name: this.props.name,
      creditCardNum: this.props.creditCardNum,
      expiration: this.props.expiration,
      cvc: this.props.cvc,
      streetAddress: {
        streetNum: this.props.streetNum,
        streetName: this.props.streetName,
      },
      city: this.props.city,
      state: this.props.state,
      zipCode: this.props.zipCode,
    };
    e.preventDefault();
    API.savePaymentInfo(paymentData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container creditCardInfo">
        <Checkbox
          checked
          id="Checkbox_3"
          label="Delivery address same as billing address"
          value="Red"
        />
        <TextInput
          id="TextInput-1"
          label="Cardholder Name"
          value={this.props.name}
        />
        <TextInput
          id="TextInput-2"
          label="Credit or Debit Card #"
          value={this.props.creditCardNum}
        />
        <TextInput
          id="TextInput-3"
          label="Expiration"
          value={this.props.expiration}
        />
        <TextInput id="TextInput-4" label="CVC" value={this.props.cvc} />
        <TextInput
          id="TextInput-5"
          label="Street Address"
          value={this.props.streetNum && this.props.streetName}
        />
        <TextInput id="TextInput-4" label="City" value={this.props.city} />
        <TextInput id="TextInput-4" label="State" value={this.props.state} />
        <TextInput
          id="TextInput-4"
          label="Zip Code"
          value={this.props.zipCode}
        />

        <Button id="saveInfoBtn" onClick={this.handleSaveClick}>
          Save
        </Button>
      </div>
    );
  }
}

export default AccountInfo;
