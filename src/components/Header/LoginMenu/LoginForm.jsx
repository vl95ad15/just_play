import React, { useState, useContext } from "react";
import { Context } from '../../../context/context';
import { client } from "../../../client";
import "./Form.css";

function LoginForm() {
  const { setIsLogged } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValidPassword = await client.checkPassword(email, password);
    if (isValidPassword === true) {
      const userName = await client.getUsernamByEmail(email);
      const library = await client.getLibraryByUsername(userName);
      setIsLogged(userName, library);
    } else {
      alert("INCORRECT DATA");
    }
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
  )
}

export default LoginForm;
