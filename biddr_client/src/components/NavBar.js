import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const { currentUser } = props;

  const handleSignOutClick = (event) => {
    event.preventDefault();
    if (typeof props.onSignOut === "function") {
      props.onSignOut();
    }
  };

  return (
    <nav className="NavBar">
      <NavLink exact to="/">Welcome</NavLink>
      <NavLink exact to="/auctions">Auctions</NavLink>
      {currentUser ? (
        <>
        <span>
          {currentUser.first_name}
        </span>
        <NavLink eact to="/auctions/new">New Auction</NavLink>
        <a href="#" onClick={handleSignOutClick}>Sign Out</a>
        </>
        ) : (
          <NavLink exact to="/session/new">Sign In</NavLink>
          // Add NavLink to Sign Up Here!
        )}
    </nav>
  );
}

export default NavBar;