'use client';

import React, { useState } from 'react';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';
import './TourSection.scss';
import Button from '@uikit/Button/Button';
import LazyLoadSection from '../../Common/LazyLoadSection/LazyLoadSection';
import { formatDateToMonthAndDay } from '@utils/index';

const TourSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId: number) => setActiveTab(tabId);
  
  return (
    <LazyLoadSection
      id="tours"
      className="tour main"
      endpoint={`concerts/type/${activeTab}`}
      renderData={(data) => {
        const concerts = data?.data;

        return (
          <>
            <SectionTitle title="Upcoming tours" />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-8 col-md-10">
                  <ul className="block-tabs list-inline gap-one-bottom-sm text-center">
                    <li
                      className={`list-inline-item ${
                        activeTab === 1 ? 'active' : ''
                      }`}
                      onClick={() => handleTabClick(1)}
                    >
                      <h5 className="uppercase mb-0">American Tour</h5>
                    </li>

                    <li
                      className={`list-inline-item ${
                        activeTab === 2 ? 'active' : ''
                      }`}
                      onClick={() => handleTabClick(2)}
                    >
                      <h5 className="uppercase mb-0">Armenian Tour</h5>
                    </li>
                  </ul>

                  {concerts && (
                    <ul className="block-tab">
                      <li className={`active`}>
                        {/* <div className="block-content text-center">
                          <div className="block-video">
                            <img
                              src={activeTour.videoThumbnail}
                              className="background-img mb-0"
                              alt=""
                            />
                            <a
                              className="video-play-but popup-youtube"
                              href={activeTour.videoLink}
                            ></a>
                          </div>
                          <p className="mt-3">
                            <span className="opc-70">
                              {activeTour.bookingText}
                            </span>{' '}
                            <a className="link colored-link" href="#">
                              Booking Enquiries
                            </a>
                          </p>
                        </div> */}

                        <div className="block-content gap-one-top-sm text-left">
                          {Object.keys(concerts).length > 1 ? (
                            concerts.map(
                              (
                                {
                                  concertCity,
                                  concertPlace,
                                  concertDate,
                                  vip,
                                }: any,
                                idx: number
                              ) => (
                                <div key={idx} className="block-content">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                      <h4 className="switch-fot">
                                        {formatDateToMonthAndDay(concertDate)}
                                      </h4>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                      <h6 className="mb-0 opc-70 uppercase">
                                        {concertCity},{' '}
                                        {activeTab === 1 ? 'USA' : 'AM'}
                                      </h6>
                                      <span>{concertPlace}</span>
                                    </div>
                                    <div className="col-12 col-lg-5 col-md-5 text-md-right">
                                      {vip && (
                                        <Button bordered>
                                          <i className="icon-ticket"></i>VIP
                                        </Button>
                                      )}
                                      <Button className="tour-button-spaced">
                                        <i className="icon-ticket"></i>Buy
                                        Ticket
                                      </Button>
                                    </div>
                                  </div>
                                  {idx !== concerts.length - 1 && <hr />}
                                </div>
                              )
                            )
                          ) : (
                            <span>No concerts found</span>
                          )}
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row display-flex justify-content-center">
                <div className="col-12 col-lg-8 col-md-10">
                  <div className="block-content gap-one-top-sm">
                    <div className="card border-dashed">
                      <div className="card-body p-5 block-subscribe">
                        <p className="uppercase text-center mb-4">
                          Subscribe for free downloads and <br /> band news
                          updates
                        </p>
                        <form method="get">
                          <div className="form-row justify-content-center">
                            <div className="col-12 col-md-9 col-lg-8 w-100">
                              <div className="form-group">
                                <input
                                  className="tour-section-input"
                                  name="email"
                                  placeholder="Email Address..."
                                  type="email"
                                />
                                <span className="text-small mt-2">
                                  * We don’t share your information with anyone.
                                </span>
                              </div>
                            </div>
                            <div className="col-auto">
                              <button
                                type="submit"
                                className="btn btn-primary uppercase border-3"
                              >
                                Subscribe now
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default TourSection;
