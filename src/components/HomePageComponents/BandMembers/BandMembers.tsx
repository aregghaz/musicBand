'use client'

import React from 'react';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';
import LazyLoadSection from '../../Common/LazyLoadSection/LazyLoadSection';
import CustomImage from '@uikit/Image/Image';
import './BandMembers.scss'

const BandMembers = () => {
  
  return (
  

    <LazyLoadSection
      id="band"
      className="band main py-5"
      endpoint="band-members"
      renderData={(data) => {


        const members = data?.data

        return (
          <>
            <SectionTitle title="Band Members" className="mt-5" />
            <div className="container">
              <div className="row justify-content-center">
                {members && members.map((member:any, index:any) => (
                  <div key={member.id} className="col-md-4 col-lg-4">
                    <div className="block-member" key={index}>

                      <CustomImage src={member.memberImage} alt='member img' />
                      {/* <img src={member.image} alt="" /> */}
                      <div className="member-info">
                        <h6 className="uppercase mb-0 ">{member.firstName} {member.lastName}</h6>
                        <span className=" mt-0"> {member.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      }}
    />
  );
};

export default BandMembers;
