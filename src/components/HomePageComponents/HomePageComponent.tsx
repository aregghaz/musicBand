'use client';

import React, { FC } from 'react';
import AboutSection from '@components/HomePageComponents/AboutSection/AboutSection';
import AlbumSection from '@components/HomePageComponents/AlbumSection/AlbumSection';
import BandMembers from '@components/HomePageComponents/BandMembers/BandMembers';
import ContactSection from '@components/HomePageComponents/ContactSection/ContactSection';
import Discography from '@components/HomePageComponents/Discography/Discography';
import DividerSection from '@components/HomePageComponents/DividerSection/DividerSection';
import GallerySection from '@components/HomePageComponents/GallerySection/GallerySection';
import HeroSection from '@components/HomePageComponents/HeroSection/HeroSection';
import NewsSection from '@components/HomePageComponents/NewsSection/NewsSection';
import PreSaleSection from '@components/HomePageComponents/PreSaleSection/PreSaleSection';
import TourSection from '@components/HomePageComponents/TourSection/TourSection';
import TwitterSection from '@components/HomePageComponents/TwitterSection/TwitterSection';
import { BASE_URL } from '@utils/index';

export const metadata = {
  title: 'Blog',
  openGraph: {
    title: 'Blog',
  },
};

interface IHomePageComponent {
  data: any;
}

const HomePageComponent: FC<IHomePageComponent> = ({ data }) => {
  return (
    <div className="wrapper">
      <HeroSection sliders={data.sliders} />

      <AlbumSection latestAlbum={data?.latestAlbum} />

      <AboutSection
        presentationSectionData={[
          data?.settings?.presentationSection,
          data?.settings?.socialLinks,
        ]}
      />

      <Discography albums={data?.albums} />

      <DividerSection upcomingTourSummary={data?.upcomingTourSummary} />

      <BandMembers data={data?.bandMembers} />

      <TourSection concerts={data?.concerts} />

      <PreSaleSection upcomingSectionData={data?.upcomingTourSection?.[0]} />

      <GallerySection images={data?.galleries} />

      <NewsSection blogPosts={data?.blogs} />

      <TwitterSection />

      <ContactSection
        contacts={data?.contacts}
        socialLinks={data?.settings?.socialLinks}
      />
    </div>
  );
};

export default HomePageComponent;
