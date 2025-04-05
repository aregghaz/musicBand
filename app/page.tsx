import React from 'react';
import HomePageComponent from '@components/HomePageComponents/HomePageComponent';

export const metadata = {
  title: 'Music Lab',
  openGraph: {
    title: 'Blog',
  },
};

const HomePage = async () => {
  return <HomePageComponent />;
};

export default HomePage;
