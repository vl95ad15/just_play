import React from "react";
import "./LoginModal.css";

const LoginModal = ({ active, setActive }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal_content" onClick={e => e.stopPropagation()}>
      <div className="modal_close_btn" onClick={() => setActive(false)}><i className="fa fa-times"></i></div>
      </div>
    </div>
  );
};

export default LoginModal;
