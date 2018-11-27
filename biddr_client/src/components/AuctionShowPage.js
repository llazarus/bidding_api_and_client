import React, { Component } from "react";

import AuctionDetails from "./AuctionDetails";
import BidList from "./BidList";
import BidForm from "./BidForm";
import { Auction, Bid } from "../requests";

class AuctionShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      auction: null
    };

    this.deleteAuction = this.deleteAuction.bind(this);
    this.createBid = this.createBid.bind(this);
  }

  createBid(params) {
    const id = this.props.match.params.id;
    Bid.create(params, id)
      .then(bid => {
        if (bid.errors) {
          this.render();
        } else {
          window.location.reload();
        }
      });
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

  deleteAuction(event) {
    event.preventDefault();
    const { match: { params } } = this.props
    Auction
      .destroy(params.id)
      .then(() => {
        this.props.history.push("/auctions")
      })
  }

  render() {
    const id = this.props.match.params.id;
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
        <button onClick={this.deleteAuction}>Delete</button>
        <hr/>
        <h3>Place a Bid</h3>
        <BidForm errors={this.state.errors} onSubmit={this.createBid} />
        <hr/>
        <h3>Previous Bids</h3>
        <BidList bids={this.state.auction.bids} />
      </main>
    );
  }
}

export default AuctionShowPage;