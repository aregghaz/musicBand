import React, { FC } from 'react';
import './AboutSection.scss';
import CustomImage from '@uikit/Image/Image';
import AboutBackground from '@assets/img/25.jpg';
import { formatDateToMonthAndDay, getYearFromDate } from '@utils/index';

interface IAboutSection {
  presentationSectionData: [
    {
      title?: string;
      description?: string;
      upcomingDateFrom?: string;
      upcomingDateTo?: string;
      upcomingLocation?: string;
      upcomingState?: string;
      upcomingCountry?: string;
    },
    { [key: string]: string },
  ];
}

const AboutSection: FC<IAboutSection> = ({ presentationSectionData }) => {
  const [presentationSection, socialLinks] = presentationSectionData;

  return (
    <section id="about" className="about overlay main">
      <div className="background-img about-background">
        {/* Background Image can be dynamic if needed */}
        <CustomImage src={AboutBackground} alt="Background" />
      </div>

      <div className="container">
        <div className="row vertical-align">
          <div className="col-lg-5 col-md-12">
            <div className="front-p">
              <h1 className="uppercase text-white">
                {presentationSection?.title || ''}
              </h1>
              <p className="w-93">{presentationSection?.description || ''}</p>

              <ul className="block-social list-inline mb-4 mb-lg-0">
                {socialLinks &&
                  Object.keys(socialLinks).map((key, index) => {
                    const link = socialLinks[key];
                    if (link) {
                      return (
                        <li className="list-inline-item mr-0" key={index}>
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={`socicon-${key.slice(0, -4)}`}></i>
                          </a>
                        </li>
                      );
                    }
                    return null;
                  })}
              </ul>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-4">
                <div className="block-content front-p pt-3 pb-3 text-center rounded bg-red mb-4 mb-lg-0">
                  <h3 className="uppercase mb-0 font-weight-600">
                    Upcoming Tour
                  </h3>
                  <span className="p mb-0">
                    {formatDateToMonthAndDay(
                      presentationSection?.upcomingDateFrom
                    )}{' '}
                    {presentationSection?.upcomingDateTo &&
                      ` to ${formatDateToMonthAndDay(
                        presentationSection?.upcomingDateTo
                      )}`}
                    {presentationSection?.upcomingDateTo &&
                      `, ${getYearFromDate(presentationSection?.upcomingDateTo)}`}
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="block-content pt-3 pb-3 text-center rounded bg-dark-blue front-p mb-4 mb-lg-0 location-block">
                  <h3 className="uppercase mb-0 font-weight-600">Location</h3>
                  <span className="p mb-0">
                    {presentationSection?.upcomingLocation}
                    {presentationSection?.upcomingState &&
                      `, ${presentationSection?.upcomingState}`}{' '}
                    <br />
                    {presentationSection?.upcomingCountry} <br />
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="block-content front-p">
                  <a
                    className="btn btn-primary uppercase with-ico border-2"
                    href="#"
                  >
                    <i className="icon-ticket"></i> Buy a Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
