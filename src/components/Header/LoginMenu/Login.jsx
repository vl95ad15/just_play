import React, { useState } from "react";
import "./Login.css";
import LoginModal from "./LoginModal";

const Login = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="LoginBar">
      <button className="SignUpBtn" onClick={() => setModalActive(true)}>
        Sign up
      </button>
      <button className="LogInBtn">Log in</button>
      <LoginModal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default Login;
