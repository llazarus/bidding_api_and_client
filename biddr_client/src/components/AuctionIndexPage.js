import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Auction } from "../requests";

class AuctionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      auctions: []
    };

    this.deleteAuction = this.deleteAuction.bind(this);
  }

  componentDidMount() {
    Auction.all().then(auctions => {
      this.setState({
        auctions: auctions,
        loading: false
      });
    });
  }

  // FIX THIS TO ACTUALLY DELETE AND NOT JUST FILTER!!!!
  deleteAuction(auctionId) {
    this.setState({
      auctions: this.state.auctions.filter(a => a.id !== auctionId)
    });
  }

  render() {
    if (this.setState.loading) {
      return (
        <main className="AuctionIndexPage">
          <h1>Auction Index</h1>
          <h2>Loading...</h2>
        </main>
      );
    }

    return (
      <main className="AuctionIndexPage">
        <h1>Auction Index</h1>
        <ul style={{
          listStyle: "none",
          paddingLeft: "0"
        }}>
          {this.state.auctions.map(auction => (
            <li key={auction.id} style={{marginBottom: "15px"}}>
              <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>
              <br/>
              {/* FIX DELETE TO ACTUALLY WORK! */}
              <button onClick={() => this.deleteAuction(auction.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default AuctionIndexPage;