import React from "react";

const AuctionDetails = (props) => (
  <div className="AuctionDetails">
    <h2>{props.title}</h2>
    <p>{props.details}</p>
    <p>{props.reserve_price}</p>
  </div>
);

export default AuctionDetails;