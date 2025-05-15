import React, { FC } from 'react';
import './ImageModal.scss';
import CustomImage from '@uikit/Image/Image';
import { STORAGE_URL } from '@utils/index';
import { useDisableScroll } from 'src/hooks/useDisableScroll';
import ImageZoomInOut from '@uikit/ImageZoomInOut/ImageZoomInOut';

interface IImageModal {
  selectedImage?: any;
  closeModal: () => void;
}

const ImageModal: FC<IImageModal> = ({ selectedImage, closeModal }) => {
  useDisableScroll();

  return (
    selectedImage && (
      <div className="image-modal" onClick={closeModal}>
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <ImageZoomInOut imageUrl={`${STORAGE_URL}${selectedImage}`} />
        </div>
      </div>
    )
  );
};

export default ImageModal;
