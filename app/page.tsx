
import React from 'react';
import HomePageComponent from '@components/HomePageComponents/HomePageComponent';

export const metadata = {
  title: 'Blog',
  openGraph: {
    title: 'Blog',
  },
};

// Output:
// <title>Blog</title>
// <meta property="og:title" content="Blog" />

export const HomePage = async () => {
  return <HomePageComponent />;
};

export default HomePage;
