import React from "react";
import "./LoginModal.css";

const LoginModal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "Modal Active" : "Modal"}
      onClick={() => setActive(false)}
    >
      <div className="ModalBox">
        <div className="ModalCloseBtn" onClick={() => setActive(false)}>
          <i className="fa fa-times"></i>
        </div>
        <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
          <h2>Sign in</h2>
            <input type="text" placeholder="Enter your nickname..."></input>
            <input type="email" placeholder="Enter your email..."></input>
            <input type="password" placeholder="Enter your password..."></input>
            <button type="submit">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
