import React, { Component } from 'react';
import './FeedbackCard.css';
import CustomerOrg from './CustomerOrg';
import CustomerName from './CustomerName';
import CustomerLocation from './CustomerLocation';
import Comments from './Comments';
import OverallRatings from './OverallRating';
import Products from './Products';

class FeedbackCard extends Component {
  render() {
    return (
      <section className="grid">
        <CustomerName customerName={this.props.feedback.name}></CustomerName>
        <CustomerOrg customerOrg={this.props.feedback.organization}></CustomerOrg>
        <CustomerLocation customerLocation={this.props.feedback.phoneNumber}></CustomerLocation>
        <OverallRatings overallRatings={this.props.feedback.rating}></OverallRatings>
        <Comments comments={this.props.feedback.comments}></Comments>
        <Products products={this.props.feedback.didyoumakeapurchase}></Products>
      </section>
    );
  }
}

export default FeedbackCard;
