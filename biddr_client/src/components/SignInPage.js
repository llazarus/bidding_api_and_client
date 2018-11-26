import React, { Component } from "react";
import { Session } from "../requests";

const fromFormData = (formData) => {
  const newObj = {};
  for (let [name, value] of formData) {
    newObj[name] = value;
  }
  return newObj;
}

export default class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.createSession = this.createSession.bind(this);
  }

  createSession(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    Session
      .create(fromFormData(formData))
      .then(data => {
        if (data.status === "error") {
          this.setState({
            errors: [data.message]
          });
          return;
        }

        if (typeof this.props.onSignIn === "function") {
          this.props.onSignIn();
        }
        this.props.history.push("/");
      });
  }

  render() {
    const { errors } = this.state;

    return (
      <main className="SignInPage">
        <h1>Sign In</h1>
        <form onSubmit={this.createSession}>
          {errors.length > 0 ? (
            <p className="FormErrors">{errors.join(", ")}</p>
          ) : null}
          <div>
            <label htmlFor="email">Email</label><br/>
            <input type="email" name="email" id="email"/>
          </div>
          <div>
            <label htmlFor="password">Password</label><br/>
            <input type="password" name="password" id="password"/>
          </div>
          <input type="submit" value="Sign In"/>
        </form>
      </main>
    );
  }
}