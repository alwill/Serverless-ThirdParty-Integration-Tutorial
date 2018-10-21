import React, { Component } from "react";
import "./Comments.css";

class CustomerLocation extends Component {
  render() {
    return (
      <div className="customer-location">
        <h4>Location</h4>
        <p>{this.props.customerLocation}</p>
      </div>
    );
  }
}

export default CustomerLocation;
