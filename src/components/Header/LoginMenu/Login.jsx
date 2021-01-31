import React, { useState } from "react";
import "./Login.css";
import LoginModal from "./LoginModal";

const Login = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="Login_Bar">
      <button className="Sign_in_btn" onClick={() => setModalActive(true)}>
        Sign in
      </button>
      <button className="Create_acc_btn">Create account</button>
      <LoginModal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default Login;
