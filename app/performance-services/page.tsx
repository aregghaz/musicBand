'use client';

import React from 'react';
import './performance.scss';
import Portfolio from '@components/PerformanceServicesComponents/Portfolio/Portfolio';
import OurTeam from '@components/PerformanceServicesComponents/OurTeam/OurTeam';
import RekSection from '@components/PerformanceServicesComponents/RekSection/RekSection';
import Services from '@components/PerformanceServicesComponents/Services/Services';

const PerformanceServicesPage = () => {
  return (
    <main className="performance-services-page">
      <Portfolio />
      <OurTeam />
      <RekSection />
      <Services />
    </main>
  );
};

export default PerformanceServicesPage;
