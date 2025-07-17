import CustomImage from '@uikit/Image/Image';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';
import NewsAboutUsSectionText from './NewAboutUsSectionText';
import { STORAGE_URL, formatDate } from '@utils/index';
import Link from 'next/link';
import React, { FC } from 'react';
import './NewsAboutUsSection.scss';

interface IBlogsSection {
  aboutUsNews: any;
}

const NewsAboutUsSection: FC<IBlogsSection> = ({ aboutUsNews }) => {
  return (
    <section id="news-about-us" className="news main">
      <SectionTitle title="News about us" />
      <div className="container">
        <ul className="news-us-list">
          {aboutUsNews &&
            aboutUsNews.map((post: any, index: any) => (
              <li
                key={index}
                className="row align-items-center justify-content-around"
              >
                {index % 2 === 0 ? (
                  <NewsAboutUsSectionText 
                      post={post} 
                      classNameImage='col-12 col-md-6 order-md-2 news-about-image-content-wrapper'
                      classNameText='col-12 col-md-6 col-lg-5 order-md-1 text-left news-about-content-wrapper'
                  />
                ) : (
                   <NewsAboutUsSectionText 
                      post={post} 
                      classNameImage='col-12 col-md-6 order-1 news-about-image-content-wrapper'
                      classNameText='col-12 col-md-6 col-lg-5 order-2 text-left news-about-content-wrapper'
                  />
                )}
              </li>
            ))}
        </ul>

        {aboutUsNews && aboutUsNews.length > 0 ? (
          <div className="block-content text-center">
            <Link
              className="btn btn-primary with-ico uppercase mt-5"
              href="/about-us-news"
            >
              View all news about us
            </Link>
          </div>
        ) : (
          <p className="text-center">No news yet</p>
        )}
      </div>
    </section>
  );
};

export default NewsAboutUsSection;
