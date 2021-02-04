import React, { useState } from "react";
import Modal from "../Modal/Modal";

import './SignUpBtn.css';

function SignUpBtn(props) {
  const [modalActive, setModalActive] = useState(false);

  return(
    <>
      <button className={props.className} onClick={() => setModalActive(true)}>
        {props.buttonText}
      </button>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  )
}

export default SignUpBtn; 
