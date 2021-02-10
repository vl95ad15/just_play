import "./Modal.css";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "Modal Active" : "Modal"}
      active={active}
      onClick={() => setActive(false)}
    >
      <div className="ModalBox">
        <div className="ModalCloseBtn" onClick={() => setActive(false)}>
          <i className="fa fa-times"></i>
        </div>
        <div className={active ? "ModalContent Active" : "ModalContent"} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;