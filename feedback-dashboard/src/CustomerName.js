import React, { Component } from "react";
import "./Comments.css";

class CustomerName extends Component {
  render() {
    return (
      <div className="customer-name">
        <h4>Customer Name</h4>
        <p>{this.props.customerName}</p>
      </div>
    );
  }
}

export default CustomerName;
