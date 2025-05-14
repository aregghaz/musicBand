'use client';

import React, { FC, useEffect, useState } from 'react';

import './GalleryInner.scss';
import CustomImage from '@uikit/Image/Image';
import { STORAGE_URL } from '@utils/index';
import dynamic from 'next/dynamic';
const ResponsiveMasonry = dynamic(
  () => import('react-responsive-masonry').then((mod) => mod.ResponsiveMasonry),
  { ssr: false }
);
const Masonry = dynamic(
  () => import('react-responsive-masonry').then((mod) => mod.default),
  { ssr: false }
);

interface GalleryInnerProps {
  folderName: string;
  galleries: {
    id: number;
    galleryImage: string;
    galleryImageDescription: string | null;
  }[];
}

const GalleryInner: FC<GalleryInnerProps> = ({ folderName, galleries }) => {
  return (
    <div className="gallery-inner">
      <div className="gallery-inner-container">
        <h1 className="gallery-inner-title">{folderName}</h1>
        {galleries.length > 0 ? (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1200: 4 }}
            style={{ gap: 24 }}
          >
            <Masonry gutter="24px">
              {galleries.map((image) => (
                <div key={image.id} className="image-card">
                  <CustomImage
                    src={`${STORAGE_URL}${image.galleryImage}`}
                    alt={image.galleryImageDescription || 'Gallery image'}
                    className="image-card-img"
                  />
                  {image.galleryImageDescription && (
                    <p className="image-card-description">
                      {image.galleryImageDescription}
                    </p>
                  )}
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <p className="gallery-empty">Images not found</p>
        )}
      </div>
    </div>
  );
};

export default GalleryInner;
