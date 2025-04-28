'use client';

import React, { useEffect, useState } from 'react';
import { BASE_URL } from '@utils/index';
import './BlogComponent.scss';
import BlogCard from './BlogCard/BlogCard';
import Nav from '@components/Common/Nav/Nav';

export const metadata = {
  title: 'Blog',
  openGraph: {
    title: 'Blog',
  },
};

const navigationItems = [
  'Home',
  'About',
  'Discography',
  'Band',
  'Tours',
  'Gallery',
  'News',
  'Contact',
];

const BlogComponent = () => {
  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    const fetchSettingsData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blogs`);
        const result = await response.json();

        if (result.data && Object.keys(result.data).length > 0) {
          setBlogs(result.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchSettingsData();
  }, []);

  return (
    <section className="blog-wrapper">
      <Nav navItems={navigationItems} />
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
