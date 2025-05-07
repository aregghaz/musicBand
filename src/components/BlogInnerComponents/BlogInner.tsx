'use client';

import { FC } from 'react';
import './BlogInner.scss';
import { STORAGE_URL, formatDate } from '@utils/index';
import CustomImage from '@uikit/Image/Image';
import { useRouter } from 'next/navigation';

interface IBlog {
  blog: {
    createdAt: string;
    title: string;
    description: string;
    image: string;
  };
}

const BlogInner: FC<IBlog> = ({ blog }) => {
  const { createdAt, title, description, image } = blog;
  const router = useRouter();

  console.log(blog, 'blog');

  return (
    <div className="blog-inner-page">
      {/* <button className="back-button" onClick={() => router.back()}>
        ← Back to Blogs
      </button> */}
      <div className="blog-inner-header">
        <h1 className="blog-inner-title">{title}</h1>
      </div>
      <div className="blog-inner-banner">
        <CustomImage
          src={`${STORAGE_URL}${image}`}
          alt={title}
          className="blog-inner-image"
        />
      </div>
      <div className="blog-inner-content">
        <span className="blog-inner-date">{formatDate(createdAt)}</span>

        <p className="blog-inner-description">{description}</p>
      </div>
    </div>
  );
};

export default BlogInner;
