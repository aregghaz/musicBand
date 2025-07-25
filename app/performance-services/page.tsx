'use client';

import React from 'react';
import './performance.scss';
import Portfolio from '@components/PerformanceServicesComponents/Portfolio/Portfolio';
import OurTeam from '@components/PerformanceServicesComponents/OurTeam/OurTeam';
import RekSection from '@components/PerformanceServicesComponents/RekSection/RekSection';
import Services from '@components/PerformanceServicesComponents/Services/Services';
import GuestArtists from '@components/PerformanceServicesComponents/GuestArtists/GuestArtists';
import Contact from '@components/PerformanceServicesComponents/Contact/Contact';

const PerformanceServicesPage = () => {
  return (
    <main className="performance-services-page">
      <Portfolio />
      <OurTeam />
      <RekSection />
      <Services />
      <GuestArtists />
      <Contact />
    </main>
  );
};

export default PerformanceServicesPage;
