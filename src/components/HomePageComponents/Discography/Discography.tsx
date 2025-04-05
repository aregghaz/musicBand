'use client'
import React from 'react';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';
import AlbumImg from '@assets/img/album/1.jpg';
import './Discography.scss';
import LazyLoadSection from '../../Common/LazyLoadSection/LazyLoadSection';
import CustomImage from '@uikit/Image/Image';

const albums = [
  { title: 'Limitless', image: AlbumImg },
  { title: 'Set me free', image: AlbumImg },
  { title: 'How It Feels', image: AlbumImg },
  { title: 'Tonight', image: AlbumImg },
];

const Discography = () => {
  return (
    <LazyLoadSection
      id="discography"
      className="discography main"
      endpoint="albums"
      renderData={(data) => {
      
        const albums = data?.data;

        return (
          <>
            <SectionTitle title="Discography" />

            <div className="container">
              <div className="row">
                {albums &&
                  albums.map((album:any, index:any) => (
                    <div key={index} className="col-12 col-md-6 col-lg-3">
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
                        <a href="album-single.html">
                          <div className="album-image-wrapper">
                          

                            <CustomImage
                              className="animated"
                              src={album?.albumImage}
                              alt={album?.albumName}
                            />
                          </div>
                        </a>
                        <ul className="block-social list-inline mb-md-3 mt-3">
                          {[
                            'apple',
                            'play',
                            'amazon',
                            'soundcloud',
                            'spotify',
                            'youtube',
                          ].map((icon, i) => {
                            return (
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
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </>
        );
      }}
    />

    // <section id="discography" className="discography main">

    // </section>
  );
};

export default Discography;
