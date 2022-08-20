import './styles.css';
function Modal({ children, setShowModal }) {
  return (
    <div className="modal">
      <button onClick={() => setShowModal(false)} className="modal__btnClose">
        X
      </button>
      {children}
    </div>
  );
}

export default Modal;
