import React, { Component } from "react";

import AuctionForm from "./AuctionForm";
import { Auction } from "../requests";

class AuctionNewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.createAuction = this.createAuction.bind(this);
  }

  createAuction(params) {
    Auction.create(params)
      .then(auction => {
        if (auction.errors) {
          this.setState({ errors: auction.errors });
        } else {
          this.props.push(`/auctions/${auction.id}`);
        }
      });
  }

  render() {
    return (
      <main className="AuctionNewPage">
        <h1>New Auction</h1>
        <AuctionForm errors={this.state.errors} onSubmit={this.createAuction} />
      </main>
    );
  }
}

export default AuctionNewPage;