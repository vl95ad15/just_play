import React from "react";
import "./Form.css";

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

  viewState = (e) => {
    e.preventDefault();
    const user = {
      [this.state.userName]: {
        library: [],
        myProfile: [
          {
            userName: this.state.userName,
          },
        ],
        password: this.state.password,
      },
    };
    this.pushToDatabase(user);
  };

  pushToDatabase = async (value) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    await fetch(`http://localhost:8000/${this.state.userName}/`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(value),
    });
    await fetch(
      `http://localhost:8000/${this.state.userName}/`,
      options
    ).then((res) => res.json());
  };

  render() {
    return (
      <form onSubmit={this.viewState}>
        <h2>Sign up</h2>
        <input name="userName" type="text" placeholder="Enter your nickname..." onChange={this.setUserName} required />
        <input name="email" type="email" placeholder="Enter your email..." onChange={this.setEmail} required />
        <input name="password" type="password" placeholder="Enter your password..." onChange={this.setPassword} required />
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default SignupForm;
