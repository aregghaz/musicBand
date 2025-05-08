import React, { FC } from 'react';
import BackgroundImage from '@assets/img/25.jpg';
import CustomImage from '@uikit/Image/Image';
import './DividerSection.scss';

interface IDividerSection {
  upcomingTourSummary: any;
}

const DividerSection: FC<IDividerSection> = ({
  upcomingTourSummary: upcomingSectionData,
}) => {
  if (!upcomingSectionData) {
    return (
      <section id="upcoming-tour-present-section" className="divider overlay">
        <div className="background-img divider-background">
          <CustomImage src={BackgroundImage} alt="Background" />
        </div>
      </section>
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

  const locationString = locationParts.length
    ? ` — ${locationParts.join(', ')}`
    : '';

  return (
    <>
      <section id="upcoming-tour-present-section" className="divider overlay">
        <div className="background-img divider-background">
          <CustomImage src={BackgroundImage} alt="Background" />
        </div>

        <div className="container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="block-content text-center front-p upcoming-section-content">
                <h1 className="uppercase">{`Time left until ${title}`}</h1>

                <p className="lead">
                  {closestDate} to {furthestDate} with {tourCount} shows
                  {locationString}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DividerSection;
