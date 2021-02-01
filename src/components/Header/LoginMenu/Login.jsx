import React, { useState } from "react";
import "./Login.css";
import LoginModal from "./LoginModal";

const Login = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="LoginBar">
      <button className="SignInBtn" onClick={() => setModalActive(true)}>
        Sign in
      </button>
      <button className="CreateAccBtn">Create account</button>
      <LoginModal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default Login;
