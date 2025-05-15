'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import './GallerySection.scss';
import { STORAGE_URL } from '@utils/index';

interface IGallerySection {
  images: { id: number; folderName: string; folderImage: string | null }[];
}

const GallerySection: FC<IGallerySection> = ({ images }) => {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-grid">
          {images?.length > 0 ? (
            images.map((item) => (
              <Link
                key={item.id}
                href={`/galleries/${item.id}`}
                passHref
                style={{ display: 'block', borderRadius: 12 }}
              >
                <div
                  className="gallery-card"
                  style={{
                    backgroundImage: `url(${STORAGE_URL}/storage/${item.folderImage})`,
                  }}
                >
                  <div className="gallery-card-overlay" />
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
