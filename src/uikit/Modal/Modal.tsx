import { ReactNode } from 'react';
import './Modal.scss'

interface Modal {
  children: ReactNode;
  closeModal: () => void;
}

const Modal = ({ closeModal,children }) => {
  return (
    <div className="custom-modal" onClick={closeModal}>
      <span className="close-btn" onClick={closeModal}>
        &times;
      </span>
      <div
        className="custom-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
