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
import PreSaleSection from '@components/HomePageComponents/PreSaleSection/PreSaleSection';
import TourSection from '@components/HomePageComponents/TourSection/TourSection';
import TwitterSection from '@components/HomePageComponents/TwitterSection/TwitterSection';
import BlogsSection from '@components/HomePageComponents/BlogsSection/BlogsSection';
import NewsAboutUsSection from './NewsAboutUsSection/NewsAboutUsSection';
import ReviewsSection from './ReviewsSection/ReviewsSection';

export const metadata = {
  title: 'Blog',
  openGraph: {
    title: 'Blog',
  },
};

interface IHomePageComponent {
  data: any;
  permissions: any;
}

const HomePageComponent: FC<IHomePageComponent> = ({ data, permissions }) => {
  return (
    <div className="wrapper">
      {permissions.slidersSection && <HeroSection sliders={data.sliders} />}
      {permissions.latestAlbumSection && (
        <AlbumSection latestAlbum={data.latestAlbum} />
      )}
      {permissions.aboutSection && (
        <AboutSection
          presentationSectionData={[
            data.settings?.presentationSection,
            data.settings?.socialLinks,
          ]}
        />
      )}
      {permissions.albumSection && <Discography albums={data.albums} />}
      {permissions.toursSection && (
        <DividerSection upcomingTourSummary={data.upcomingTourSummary} />
      )}
      {permissions.bandMembersSection && (
        <BandMembers data={data.bandMembers} />
      )}

      {permissions.aboutUsNewsSection && (
        <NewsAboutUsSection aboutUsNews={data.aboutUsNews} />
      )}

      {permissions.concertsSection && <TourSection concerts={data.concerts} />}
      {permissions.toursSection && (
        <PreSaleSection upcomingSectionData={data.upcomingTourSection?.[0]} />
      )}
      {permissions.gallerySection && <GallerySection images={data.galleries} />}
      {permissions.blogsSection && <BlogsSection blogPosts={data.blogs} />}
      <TwitterSection />

      {permissions.reviewsSection && <ReviewsSection reviews={data.reviews} />}
      {permissions.contactsSection && (
        <ContactSection
          contacts={data.contacts}
          socialLinks={data.settings?.socialLinks}
        />
      )}
    </div>
  );
};

export default HomePageComponent;
