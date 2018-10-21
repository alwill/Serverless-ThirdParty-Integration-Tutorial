import React, { Component } from "react";
import "./Comments.css";

class Products extends Component {
  render() {
    return (
      <div className="products">
        <h4>Did the customer make a purchase?</h4>
        <p>{this.props.products}</p>
      </div>
    );
  }
}

export default Products;
