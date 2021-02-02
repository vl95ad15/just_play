import LoginModal from "../Header/LoginMenu/LoginModal";
import React, { useState } from "react";
import './SignUpMessage.css';

function SignUpMessage() {
  const [modalActive, setModalActive] = useState(false);
  
  return(
    <div className="SignUpMessage">
      <span>Sign up to get unlimited songs. No credit card needed.</span>
      <button  classname="SignUpMessageBtn" onClick={() => setModalActive(true)}>Sign up free</button>
      <LoginModal active={modalActive} setActive={setModalActive} />
    </div>
  )
}

export default SignUpMessage;
