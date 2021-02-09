import React, { useState } from "react";
import { client } from "../../../client";
import "./Form.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValidPassword = await client.checkPassword(email, password);
    console.log(isValidPassword);
  };

  return (
    <div className="Form">
      <h2>Log in</h2>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginForm;
