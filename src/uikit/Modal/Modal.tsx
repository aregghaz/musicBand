import { FC, ReactNode } from 'react';
import './Modal.scss';
import { useDisableScroll } from 'src/hooks/useDisableScroll';

interface IModal {
  children: ReactNode;
  closeModal: () => void;
  className?: string;
}

const Modal: FC<IModal> = ({ closeModal, children, className }) => {
  useDisableScroll();

  return (
    <div className={`custom-modal ${className}`} onClick={closeModal}>
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
