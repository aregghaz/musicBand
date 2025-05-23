'use client';

import React, { FC, useState } from 'react';
import Slider from 'react-slick';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';
import CustomImage from '@uikit/Image/Image';
import './BandMembers.scss';
import { STORAGE_URL } from '@utils/index';
import { sliderSettings } from './constants';
import MemberInfoModal from '../MemberComponents/MemberInfoModal';

interface IBandMember {
  data?: any;
}

const BandMembers: FC<IBandMember> = ({ data: members }) => {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleShowMemberInfo = (member: any) => {
    setSelectedMember(member);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    setOpenModal(false);
  };

  const activeMembers = members
    ? members.filter((member: any) => member.isActive)
    : [];

  const bandHead = activeMembers.find((member: any) => member.isHead) || null;

  const sortedMembers = [...activeMembers]
    .filter((member: any) => !member.isHead)
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <section id="band" className="band main py-5">
        <SectionTitle title="Our Team" className="mt-5" />

        {bandHead && (
          <div className="band-head-container">
            <h4>Artistic Director</h4>

            <div className="band-head-wrapper">
              <div
                className="p-3 band-head"
                onClick={() => handleShowMemberInfo(bandHead)}
              >
                <div className="block-member">
                  <CustomImage
                    src={`${STORAGE_URL}${bandHead.memberImage}`}
                    alt="member img"
                  />
                  <div className="member-info text-center mt-2">
                    <h6 className="uppercase mb-0">
                      {bandHead.firstName} {bandHead.lastName}
                    </h6>
                    <span className="mt-0">{bandHead.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container members-container">
          <h4>Musicians</h4>

          {members && (
            <Slider {...sliderSettings}>
              {sortedMembers.map((member: any, index: number) => (
                <div
                  key={member.id}
                  className="p-3"
                  onClick={() => handleShowMemberInfo(member)}
                >
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
      </section>

      {openModal && (
        <MemberInfoModal
          closeModal={handleCloseModal}
          member={selectedMember}
        />
      )}
    </>
  );
};

export default BandMembers;
