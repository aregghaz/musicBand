'use client';

import React, { FC } from 'react';

import './BlogComponent.scss';
import BlogCard from './BlogCard/BlogCard';

interface IBlogComponent {
  blogs: any;
}

const BlogComponent: FC<IBlogComponent> = ({ blogs }: any) => {
  return (
    <section className="blog-wrapper">
      <div className="blog-header">
        <h1>Our Blog</h1>
        <p>
          Get the latest updates, insights, and behind-the-scenes stories from
          our team.
        </p>
      </div>
      <div className="blog-list">
        {blogs.map((blog: any) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogComponent;
