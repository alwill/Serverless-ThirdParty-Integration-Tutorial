import React, { Component } from "react";
import "./Comments.css";

class OverallRating extends Component {
  render() {
    return (
      <div className="overall-rating">
        <h4>Rating</h4>
        <p>
          {this.props.overallRatings}
          /10
        </p>
      </div>
    );
  }
}

export default OverallRating;
