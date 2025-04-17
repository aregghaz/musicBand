import React, { FC } from 'react';
import './ImageModal.scss';
import CustomImage from '@uikit/Image/Image';
import { STORAGE_URL } from '@utils/index';

interface IImageModal {
  selectedImage?: any;
  closeModal: () => void;
}

const ImageModal: FC<IImageModal> = ({ selectedImage, closeModal }) => {
  return (
    selectedImage && (
      <div className="image-modal" onClick={closeModal}>
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <CustomImage src={`${STORAGE_URL}${selectedImage}`} alt="Zoomed In" />
        </div>
      </div>
    )
  );
};

export default ImageModal;
