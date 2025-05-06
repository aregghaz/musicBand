import React from 'react';
import HomePageComponent from '@components/HomePageComponents/HomePageComponent';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
