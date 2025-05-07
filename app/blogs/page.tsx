import React from 'react';
import BlogComponent from '@components/BlogsComponents/BlogComponent';
import { BASE_URL } from '@utils/index';

export const metadata = {
  title: 'Music Lab',
  openGraph: {
    title: 'Blog',
  },
};

const BlogPage = async () => {
  const res = await fetch(`${BASE_URL}/blogs`, {
    cache: 'no-store',
  });

  const blogs = await res.json();

  return <BlogComponent blogs={blogs?.data || []} />;
};

export default BlogPage;
