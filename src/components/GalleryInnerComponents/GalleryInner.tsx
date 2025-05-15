'use client';

import React, { FC, useState, useEffect } from 'react';
import './GalleryInner.scss';
import CustomImage from '@uikit/Image/Image';
import { STORAGE_URL } from '@utils/index';
import dynamic from 'next/dynamic';
import ImageModal from '@uikit/ImageModal/ImageModal';

const ResponsiveMasonry = dynamic(
  () => import('react-responsive-masonry').then((mod) => mod.ResponsiveMasonry),
  { ssr: false }
);
const Masonry = dynamic(
  () => import('react-responsive-masonry').then((mod) => mod.default),
  { ssr: false }
);

interface GalleryItem {
  id: number;
  galleryImage: string;
  galleryImageDescription: string | null;
}

interface GalleryInnerProps {
  folderName: string;
  galleries: GalleryItem[];
}

const GalleryInner: FC<GalleryInnerProps> = ({ folderName, galleries }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery-inner">
      <div className="gallery-inner-container">
        <h1 className="gallery-inner-title">{folderName}</h1>
        {galleries.length > 0 ? (
          isClient ? (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 768: 2, 1200: 4 }}
            >
              <Masonry gutter="24px">
                {galleries.map((image) => (
                  <div
                    key={image.id}
                    className="image-card"
                    onClick={() => openModal(image.galleryImage)}
                  >
                    {image.galleryImageDescription && (
                      <p className="image-card-description">
                        {image.galleryImageDescription}
                      </p>
                    )}
                    <CustomImage
                      src={`${STORAGE_URL}${image.galleryImage}`}
                      alt={
                        image.galleryImageDescription ||
                        `Gallery image ${image.id}`
                      }
                      className="image-card-img"
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          ) : (
            <div className="gallery-grid-fallback">
              {galleries.map((image) => (
                <div
                  key={image.id}
                  className="image-card"
                  onClick={() => openModal(image.galleryImage)}
                >
                  {image.galleryImageDescription && (
                    <p className="image-card-description">
                      {image.galleryImageDescription}
                    </p>
                  )}
                  <CustomImage
                    src={`${STORAGE_URL}${image.galleryImage}`}
                    alt={
                      image.galleryImageDescription ||
                      `Gallery image ${image.id}`
                    }
                    className="image-card-img"
                  />
                </div>
              ))}
            </div>
          )
        ) : (
          <p className="gallery-empty">Images not found</p>
        )}
      </div>

      {selectedImage && (
        <ImageModal closeModal={closeModal} selectedImage={selectedImage} />
      )}
    </section>
  );
};

export default GalleryInner;
