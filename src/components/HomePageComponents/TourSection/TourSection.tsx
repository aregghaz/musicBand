'use client';

import React, { FC, useEffect, useState } from 'react';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';
import './TourSection.scss';
import Button from '@uikit/Button/Button';
import { formatDateToMonthAndDay } from '@utils/index';
import Link from 'next/link';

interface ITourSection {
  concerts: any;
}

const TourSection: FC<ITourSection> = ({ concerts }) => {
  return (
    <>
      <section id="concerts" className="tour main">
        <SectionTitle title="Upcoming Concerts" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-md-10">
              {concerts && (
                <ul className="block-tab">
                  <li className={`active`}>
                    <div className="block-content gap-one-top-sm text-left">
                      {Object.keys(concerts).length > 0 ? (
                        concerts.map(
                          (
                            {
                              buyTicketLink,
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
                                    {concertCity}, USA
                                  </h6>
                                  <span>{concertPlace}</span>
                                </div>
                                <div className="col-12 col-lg-5 col-md-5 text-md-right">
                                  {vip && (
                                    <Button bordered>
                                      <i className="icon-ticket"></i>VIP
                                    </Button>
                                  )}

                                  {buyTicketLink ? (
                                    <Link
                                      href={buyTicketLink}
                                      target="_blank"
                                      rel="noopener"
                                    >
                                      <Button className="tour-button-spaced">
                                        <i className="icon-ticket"></i>Buy
                                        Ticket
                                      </Button>
                                    </Link>
                                  ) : null}
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

        {/* TODO: remove if no need in future */}
        {/* <div className="container">
          <div className="row display-flex justify-content-center">
            <div className="col-12 col-lg-8 col-md-10">
              <div className="block-content gap-one-top-sm">
                <div className="card border-dashed">
                  <div className="card-body  block-subscribe">
                    <p className="uppercase text-center mb-4">
                      Subscribe for free downloads and <br /> band news updates
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
        </div> */}
      </section>
    </>
  );
};

export default TourSection;
