import React, { Component } from "react";
import "./Comments.css";

class CustomerOrg extends Component {
  render() {
    return (
      <div className="customer-org">
        <h4>Organization</h4>
        <p>{this.props.customerOrg}</p>
      </div>
    );
  }
}

export default CustomerOrg;
