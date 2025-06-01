'use client';

import { FC } from 'react';
import Modal from '@uikit/Modal/Modal';
import CustomImage from '@uikit/Image/Image';
import { STORAGE_URL } from '@utils/index';
import './MemberInfoModal.scss';
import dynamic from 'next/dynamic';

const ResponsiveMasonry = dynamic(
  () => import('react-responsive-masonry').then((mod) => mod.ResponsiveMasonry),
  { ssr: false }
);
const Masonry = dynamic(
  () => import('react-responsive-masonry').then((mod) => mod.default),
  { ssr: false }
);

interface IMember {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  memberImage: string;
  memberImages?: string[];
  country?: string;
  description?: string;
  facebookLink?: string;
  instagramLink?: string;
  webpageLink?: string;
  wikipediaLink?: string;
  youtubeLink?: string;
  formattedDescription?: string;
}

interface IMemberInfoModalProps {
  member: IMember;
  closeModal: () => void;
}

const MemberInfoModal: FC<IMemberInfoModalProps> = ({ member, closeModal }) => {
  const hasAnyLink =
    member.facebookLink ||
    member.instagramLink ||
    member.webpageLink ||
    member.wikipediaLink ||
    member.youtubeLink;

  return (
    <Modal closeModal={closeModal} className="member-modal-wrapper">
      <div className="member-info-modal">
        <div className="member-details-wrapper">
          <div className="member-image">
            <CustomImage
              src={`${STORAGE_URL}${member.memberImage}`}
              alt={`${member.firstName} ${member.lastName}`}
            />
          </div>
          <div className="member-details">
            <h2 className="member-name">
              {member.firstName} {member.lastName}
            </h2>
            <p className="member-role">{member.role}</p>

            {member.country && (
              <p className="member-country">
                <strong>Country:</strong> {member.country}
              </p>
            )}

            {hasAnyLink ? (
              <ul className="block-social list-inline mb-md-3 mt-3">
                {[
                  'facebook',
                  'instagram',
                  'webpage',
                  'wikipedia',
                  'youtube',
                  'spotify',
                  'tiktok',
                  'appleMusic',
                ].map((key, i) => {
                  const iconMap: { [key: string]: string } = {
                    facebook: 'facebook',
                    instagram: 'instagram',
                    wikipedia: 'wikipedia',
                    youtube: 'youtube',
                    webpage: 'chrome',
                    tiktok: 'tumblr',
                    spotify: 'spotify',
                    appleMusic: 'apple',
                  };

                  const linkKey = `${key}Link` as keyof IMember;
                  return member[linkKey] ? (
                    <li key={i} className="list-inline-item mr-0">
                      <a
                        href={member[linkKey] as string}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={`socicon-${iconMap[key]}`}></i>
                      </a>
                    </li>
                  ) : null;
                })}
              </ul>
            ) : (
              ''
            )}

            <div className="member-description-wrapper">
              {/* <ReactMarkdown>{member.formattedDescription || ''}</ReactMarkdown> */}
             <p className="member-description">{member.description}</p>
            </div>
          </div>
        </div>

        {Boolean(member?.memberImages?.length) && (
          <div className="band-member-gallery">
            <h4>Gallery</h4>
            <div className="gallery-scroll-container">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry gutter="10px">
                  {member?.memberImages?.map((image, index) => (
                    <div
                      key={`${image}-${index}`}
                      className="modal-band-member-image"
                    >
                      <CustomImage
                        src={`${STORAGE_URL}${image}`}
                        alt={`member img ${index}`}
                        className="rounded-lg"
                      />
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default MemberInfoModal;
