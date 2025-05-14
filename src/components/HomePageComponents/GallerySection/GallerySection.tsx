'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import './GallerySection.scss';

interface IGallerySection {
  images: { id: number; folderName: string }[];
}

const GallerySection: FC<IGallerySection> = ({ images }) => {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-grid">
          {images?.length > 0 ? (
            images.map((item) => (
              <Link key={item.id} href={`/galleries/${item.id}`} passHref>
                <div className="gallery-card">
                  <h3 className="gallery-card-title">{item.folderName}</h3>
                </div>
              </Link>
            ))
          ) : (
            <p className="gallery-empty">No gallery found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
