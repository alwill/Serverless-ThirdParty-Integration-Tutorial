import React, { Component } from "react";
import "./Comments.css";

class Comments extends Component {
  render() {
    return (
      <div className="comments">
        <h4>Comments</h4>
        <p>{this.props.comments}</p>
      </div>
    );
  }
}

export default Comments;
