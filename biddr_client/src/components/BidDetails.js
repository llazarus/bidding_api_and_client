import React from "react";

const BidDetails = (props) => (
  <div className="BidDetails">
    <p>${props.bid_value} at {props.created_at}</p>
    <br/>
  </div>
);

export default BidDetails;