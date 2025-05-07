'use client';

import { FC } from 'react';
import './BlogCard.scss';
import { STORAGE_URL, formatDate } from '@utils/index';
import CustomImage from '@uikit/Image/Image';
import Link from 'next/link';

interface IBlog {
  blog: {
    createdAt: string;
    title: string;
    description: string;
    image: string;
    link?: string;
    id: number;
  };
}

const BlogCard: FC<IBlog> = ({ blog }) => {
  const { createdAt, title, description, image, id } = blog;

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
        <span className="blog-date">{formatDate(createdAt)}</span>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-description">{description}</p>
      </div>
      <Link
        href={`/blogs/${id}`}
        className="read-more link colored-link cursor-pointer"
      >
        Read more →
      </Link>
    </div>
  );
};

export default BlogCard;
