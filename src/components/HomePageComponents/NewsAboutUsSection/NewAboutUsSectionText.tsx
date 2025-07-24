import CustomImage from '@uikit/Image/Image';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';
import { STORAGE_URL, formatDate } from '@utils/index';
import Link from 'next/link';
import React, { FC } from 'react';
import './NewsAboutUsSection.scss';

interface INewsAboutUsSectionText {
  post: any;
  classNameImage: string;
  classNameText: string;
}

const NewsAboutUsSectionText: FC<INewsAboutUsSectionText> = ({
  post,
  classNameImage,
  classNameText,
}) => {
  return (
    <div className="row align-items-center justify-content-around">
      <div className={classNameImage}>
        <div className="block-content ">
          {/* <a href={post.link}> */}
          <CustomImage
            alt={post.title}
            className="img-fluid scaled"
            src={`${STORAGE_URL}${post.image}`}
          />
          {/* </a> */}
        </div>
      </div>
      <div className={classNameText}>
        <div className="block-content">
          <span className="mb-2 opc-70">{formatDate(post?.createdAt)}</span>
          <h2>{post.title}</h2>
          <p className="about-us-text">{post.description}</p>
          <Link
            href={post.topicLink}
            target="_blank"
            className="link colored-link mt-3 cursor-pointer"
          >
            More info ›
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsAboutUsSectionText;
