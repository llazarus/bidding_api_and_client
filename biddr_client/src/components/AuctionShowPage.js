import React, { Component } from "react";

import AuctionDetails from "./AuctionDetails";
import BidList from "./BidList";
import { Auction } from "../requests";

class AuctionShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      auction: null
    };

    this.deleteAuction = this.deleteAuction.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Auction.one(id).then(auction => {
      this.setState({
        auction: auction,
        loading: false
      });
    });
  }

  // FIX THIS TO ACTUALLY DELETE FROM DATABASE!
  deleteAuction() {
    this.setState({
      auction: null
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <main className="AuctionShowPage">
          <h2>Loading...</h2>
        </main>
      );
    }

    if (!this.state.auction) {
      return (
        <main className="AuctionShowPage">
          <h2>Auction doesn't exist!</h2>
        </main>
      );
    }

    return (
      <main className="AuctionShowPage">
        <AuctionDetails {...this.state.auction} />
        {/* Fix this to actually work! */}
        <button onClick={this.deleteAuction}>Delete</button>
        <h3>Previous Bids</h3>
        <BidList bids={this.state.auction.bids} />
      </main>
    );
  }
}

export default AuctionShowPage;