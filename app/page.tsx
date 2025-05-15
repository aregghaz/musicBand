import React from 'react';
import HomePageComponent from '@components/HomePageComponents/HomePageComponent';
import { BASE_URL } from '@utils/index';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata = {
  title: 'Music Lab',
  openGraph: {
    title: 'Blog',
  },
};

const HomePage = async () => {
  const res = await fetch(`${BASE_URL}/home-data`, {
    cache: 'no-store',
  });

  const permissions = await fetch(`${BASE_URL}/home-sections-manage`, {
    cache: 'no-store',
  });

  const homeData = await res.json();

  const permissionsData = await permissions.json();

  return (
    <HomePageComponent
      data={homeData?.data}
      permissions={permissionsData.data}
    />
  );
};

export default HomePage;
