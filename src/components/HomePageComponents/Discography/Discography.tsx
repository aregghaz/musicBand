'use client';

import React from 'react';
import Slider from 'react-slick';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';
import LazyLoadSection from '../../Common/LazyLoadSection/LazyLoadSection';
import CustomImage from '@uikit/Image/Image';
import './Discography.scss';
import { STORAGE_URL } from '@utils/index';

const Discography = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 568,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <LazyLoadSection
      id="discography"
      className="discography main"
      endpoint="albums"
      renderData={(data) => {
        const albums = data?.data;

        return (
          <>
            <SectionTitle title="Discography" className="discography-title" />
            <div className="container">
              {albums && (
                <Slider {...settings}>
                  {albums.map((album: any, index: number) => (
                    <div key={index} className="px-3">
                      <div className="block-album block-content">
                        <h5 className="mb-0 opc-70 uppercase">
                          {album.albumName}
                        </h5>
                        <a
                          className="link colored-link"
                          href="album-single.html"
                        >
                          View Album ›
                        </a>
                        <div className="album-image-wrapper">
                          <CustomImage
                            className="animated"
                            src={`${STORAGE_URL}${album?.albumImage}`}
                            alt={album?.albumName}
                          />
                        </div>
                        <ul className="block-social list-inline mb-md-3 mt-3">
                          {[
                            'apple',
                            'play',
                            'amazon',
                            'soundcloud',
                            'spotify',
                            'youtube',
                          ].map(
                            (icon, i) =>
                              album[`${icon}Link`] && (
                                <li key={i} className="list-inline-item mr-0">
                                  <a
                                    href={album[`${icon}Link`]}
                                    target="_blank"
                                  >
                                    <i className={`socicon-${icon}`}></i>
                                  </a>
                                </li>
                              )
                          )}
                        </ul>
                      </div>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </>
        );
      }}
    />
  );
};

export default Discography;
