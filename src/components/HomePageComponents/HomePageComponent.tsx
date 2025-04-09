'use client';

import React, { useEffect, useState } from 'react';
import ScrollUp from '@uikit/ScrollUp/ScrollUp';
import Footer from '@components/Common/Footer/Footer';
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

// Output:
// <title>Blog</title>
// <meta property="og:title" content="Blog" />

const HomePageComponent = () => {
  const [data, setData] = useState({
    presentationSection: {},
    socialLinks: {},
    sliders: [],
  });

  useEffect(() => {
    const fetchSettingsData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/settings`);
        const result = await response.json();

        if (result.data && result.data.length > 0) {
          const settings = result.data[0];
          setData({
            presentationSection: settings.presentationSection,
            socialLinks: settings.socialLinks,
            sliders: settings.sliders,
          });
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettingsData();
  }, []);

  console.log(data, 'data');

  return (
    <div className="wrapper">
      {/* <div className="block-search-form">
        <div className="block-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <form method="get">
                  <div className="card bg-danger">
                    <div className="card-body d-flex align-items-center p-4">
                      <div className="flex-shrink-0">
                        <i className="icon-search text-white text-xl"></i>
                      </div>
                      <div className="flex-grow-1">
                        <input
                          className="form-control form-control-lg border-0 w-100 p-2 rounded-lg"
                          placeholder="Type a keyword..."
                          type="search"
                        />
                      </div>
                      <div className="flex-shrink-0">
                        <button
                          type="submit"
                          className="btn btn-primary text-uppercase border-3 px-4 py-2 bg-blue-600 text-white rounded-lg"
                        >
                          Search now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <HeroSection sliders={data.sliders} />

      <AlbumSection />

      <AboutSection
        presentationSectionData={[data.presentationSection, data.socialLinks]}
      />

      <Discography />

      <DividerSection />

      <BandMembers />

      <TourSection />

      <PreSaleSection />

      <GallerySection />

      <NewsSection />

      <TwitterSection />

      <ContactSection socialLinks={data.socialLinks} />

      <Footer />

      <ScrollUp />
    </div>
  );
};

export default HomePageComponent;
