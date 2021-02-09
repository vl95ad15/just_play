import React from "react";
import "./Form.css";
import { client } from "../../../client";
import { v4 } from "uuid";

class SignupForm extends React.Component {
  state = {
    userName: "",
    email: "",
    password: "",
  };
  setUserName = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  setEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  setPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      id: v4(),
      ...this.state,
    };

    await client.signUp(newUser);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Sign up</h2>
        <input
          name="userName"
          type="text"
          placeholder="Enter your nickname..."
          onChange={this.setUserName}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Enter your email..."
          onChange={this.setEmail}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Enter your password..."
          onChange={this.setPassword}
          required
        />
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default SignupForm;
