'use client';

import React, { FC, useState } from 'react';
import Slider from 'react-slick';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';
import LazyLoadSection from '../../Common/LazyLoadSection/LazyLoadSection';
import CustomImage from '@uikit/Image/Image';
import './BandMembers.scss';
import { STORAGE_URL } from '@utils/index';
import { sliderSettings } from './constants';
import MemberInfoModal from '../MemberComponents/MemberInfoModal';

interface IBandMember {
  data: any;
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

  return (
    <>
      <section id="band" className="band main py-5">
        <SectionTitle title="Band Members" className="mt-5" />
        <div className="container">
          {members && (
            <Slider {...sliderSettings}>
              {members.map((member: any, index: number) => (
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
