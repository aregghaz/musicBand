import Modal from '@uikit/Modal/Modal';
import { FC } from 'react';
import './MemberInfoModal.scss';
import CustomImage from '@uikit/Image/Image';
import { STORAGE_URL } from '@utils/index';
import Slider from 'react-slick';
import { sliderSettings } from './constants';

interface IMemberInfoModal {
  member: any;
  closeModal: () => void;
}

const MemberInfoModal: FC<IMemberInfoModal> = ({ member, closeModal }) => {
  const hasAnyLink =
    member.facebookLink ||
    member.instagramLink ||
    member.webpageLink ||
    member.wikipediaLink ||
    member.youtubeLink;

  console.log(member?.memberImages);

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
                ].map((key, i) => {
                  const iconMap: Record<string, string> = {
                    facebook: 'facebook',
                    instagram: 'instagram',
                    wikipedia: 'wikipedia',
                    youtube: 'youtube',
                    webpage: 'chrome',
                  };

                  return member[`${key}Link`] ? (
                    <li key={i} className="list-inline-item mr-0">
                      <a
                        href={member[`${key}Link`]}
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

            <p className="member-description">{member.description}</p>
          </div>
        </div>

        {member?.memberImages?.length > 0 && (
          <div className="band-member-gallery">
            <h4>Gallery</h4>

            <div className="band-member-slider-wrapper">
              <Slider {...sliderSettings}>
                {member?.memberImages?.map((image: any, index: number) => (
                  <div key={image} className="p-3 modal-band-member-image">
                    <CustomImage
                      src={`${STORAGE_URL}${image}`}
                      alt={`member img ${index}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default MemberInfoModal;
