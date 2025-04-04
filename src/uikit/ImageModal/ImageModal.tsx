import React, { FC } from 'react';
import './ImageModal.scss';

interface ImageModal {
  selectedImage?: any;
  closeModal: () => void;
}

const ImageModal: FC<ImageModal> = ({ selectedImage, closeModal }) => {
  return (
    selectedImage && (
      <div className="image-modal" onClick={closeModal}>
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img src={selectedImage} alt="Zoomed In" />
        </div>
      </div>
    )
  );
};

export default ImageModal;
