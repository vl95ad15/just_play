import React, { useState } from "react";
import Modal from "../Modal/Modal";
import SignupForm from "../Header/LoginMenu/SignupForm";
// import LoginForm from "../Header/LoginMenu/LoginForm";

import "./RegBtn.css";

function RegBtn(props) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <button className={props.className} onClick={() => setModalActive(true)}>
        {props.buttonText}
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <SignupForm />
      </Modal>
    </>
  );
}

export default RegBtn;
