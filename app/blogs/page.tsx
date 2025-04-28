import React from 'react';
import HomePageComponent from '@components/HomePageComponents/HomePageComponent';
import BlogComponent from '@components/BlogsComponents/BlogComponent';

export const metadata = {
  title: 'Music Lab',
  openGraph: {
    title: 'Blog',
  },
};

const BLogPage = async () => {
  return <BlogComponent />;
};

export default BLogPage;
