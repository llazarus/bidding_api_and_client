import React, { Component } from "react";

import SignUpForm from "./SignUpForm";
import { User } from "../requests";

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.createUser = this.createUser.bind(this);
  }

  createUser(params) {
    User.create(params)
      .then(user => {
      if (user.errors) {
        this.setState({ errors: user.errors });
      } else {
        this.props.history.push("/");
      }
    });
  }

  render() {
    return(
      <main className="SignUpPage">
        <h1>Sign Up</h1>
        <SignUpForm errors={this.state.errors} onSubmit={this.createUser}/>
      </main>
    );
  }
}

export default SignUpPage;