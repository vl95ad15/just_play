import RegForm from "../Header/LoginMenu/RegForm";
import "./Modal.css";

const Modal = ({ active, setActive }) => {
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
          <RegForm case="SignUp"/>
          <RegForm case="LogIn"/>
        </div>
      </div>
    </div>
  );
};

export default Modal;