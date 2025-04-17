'use client';

import React from 'react';
import Slider from 'react-slick';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';
import LazyLoadSection from '../../Common/LazyLoadSection/LazyLoadSection';
import CustomImage from '@uikit/Image/Image';
import './BandMembers.scss';
import { STORAGE_URL } from '@utils/index';

const BandMembers = () => {
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <LazyLoadSection
      id="band"
      className="band main py-5"
      endpoint="band-members"
      renderData={(data) => {
        const members = data?.data;

        return (
          <>
            <SectionTitle title="Band Members" className="mt-5" />
            <div className="container">
              {members && (
                <Slider {...sliderSettings}>
                  {members.map((member: any, index: number) => (
                    <div key={member.id} className="p-3">
                      <div className="block-member">
                        <CustomImage
                          src={`${STORAGE_URL}${member.memberImage}`}
                          alt="member img"
                        />
                        <div className="member-info text-center mt-2">
                          <h6 className="uppercase mb-0">
                            {member.firstName} {member.lastName}
                          </h6>
                          <span className="mt-0">{member.role}</span>
                        </div>
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

export default BandMembers;
