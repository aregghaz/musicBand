import React, { FC, useState } from 'react';
import GalleryImage from '@assets/img/imagePlaceholder.jpg';
import ImageModal from '@uikit/ImageModal/ImageModal';
import './GallerySection.scss';
import CustomImage from '@uikit/Image/Image';
import LazyLoadSection from '@components/Common/LazyLoadSection/LazyLoadSection';
import { STORAGE_URL } from '@utils/index';

interface IGallerySection {
  images: any;
}

const GallerySection: FC<IGallerySection> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image: any) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="gallery" className="gallery main">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-12 col-md-10 col-lg-9">
              <div className="block-content  gap-one-bottom-md text-center">
                <i className="icon-camera-7 big-icon adjust-space "></i>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="card-gallery image-gallery">
                {images?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="image-container"
                    onClick={() => openModal(item.galleryImage)}
                  >
                    <CustomImage
                      className="scaled"
                      alt={`Gallery Image ${index + 1}`}
                      src={`${STORAGE_URL}${item.galleryImage}`}
                    />
                  </div>
                ))}
              </div>
              <a className="btn btn-primary uppercase with-ico mt-5" href="#">
                <i className="icon-instagram"></i> Follow us @mousiqua
              </a>
            </div>
          </div>
        </div>

        {selectedImage && (
          <ImageModal closeModal={closeModal} selectedImage={selectedImage} />
        )}
      </section>
    </>
  );
};

export default GallerySection;
