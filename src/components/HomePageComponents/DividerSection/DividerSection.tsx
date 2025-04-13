import React from 'react';
import BackgroundImage from '@assets/img/25.jpg';
import CustomImage from '@uikit/Image/Image';
import LazyLoadSection from '@components/Common/LazyLoadSection/LazyLoadSection';

const DividerSection = () => {
  return (
    <LazyLoadSection
      id="upcoming-tour-present-section"
      className="divider overlay"
      endpoint="tour-presale-summary"
      renderData={(data) => {
        const upcomingSectionData = data?.data;

        if (!upcomingSectionData) {
          return (
            <div className="background-img divider-background">
              <CustomImage src={BackgroundImage} alt="Background" />
            </div>
          );
        }

        const {
          title,
          tourCount,
          closestDate,
          furthestDate,
          upcomingLocation,
          upcomingState,
          upcomingCountry,
        } = upcomingSectionData;

        
        const locationParts = [
          upcomingLocation,
          upcomingState,
          upcomingCountry,
        ].filter(Boolean);

        const locationString = locationParts.length ? ` — ${locationParts.join(', ')}` : '';

        return (
          <>
            <div className="background-img divider-background">
              <CustomImage src={BackgroundImage} alt="Background" />
            </div>

            <div className="container">
              <div className="row justify-center">
                <div className="col-12">
                  <div className="block-content text-center front-p">
                    <h1 className="uppercase">
                      {`Time left until ${title}`}
                    </h1>

                    <p className="lead">
                      {closestDate} to {furthestDate} with {tourCount} shows
                      {locationString}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    />
  );
};

export default DividerSection;
