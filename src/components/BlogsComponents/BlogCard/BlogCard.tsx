'use client';

import { FC } from 'react';
import './BlogCard.scss';
import { STORAGE_URL } from '@utils/index';
import CustomImage from '@uikit/Image/Image';

interface IBlog {
  blog: {
    createdAt: string;
    title: string;
    description: string;
    image: string;
    link?: string;
  };
}

const BlogCard: FC<IBlog> = ({ blog }) => {
  const { createdAt, title, description, image, link = '#' } = blog;

  return (
    <div className="blog-card">
      <div className="blog-image-wrapper">
        <CustomImage
          src={`${STORAGE_URL}${image}`}
          alt={title}
          className="blog-image"
        />
      </div>
      <div className="blog-content">
        <span className="blog-date">
          {new Date(createdAt).toLocaleDateString()}
        </span>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-description">{description}</p>
      </div>
      <a
        href={link}
        className="read-more link colored-link cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more →
      </a>
    </div>
  );
};

export default BlogCard;
