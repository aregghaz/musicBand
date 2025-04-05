import React from 'react';
import LazyLoadSection from '../../Common/LazyLoadSection/LazyLoadSection';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';
import { formatDate } from '@utils/index';
import ImagePlaceholder from '@assets/img/imagePlaceholder.jpg';
import './NewsSection.scss'

import CustomImage from '@uikit/Image/Image';

const NewsSection = () => {

  return (
    <LazyLoadSection
      id="news"
      className="news main"
      endpoint="blogs"
      renderData={(data) => {
        const blogPosts = data?.data;
        return (
          <>
            <SectionTitle title="On the blog" />
            <div className="container">
              <ul className="news-list">
                {blogPosts &&
                  blogPosts.map((post: any, index: any) => (
                    <li
                      key={index}
                      className="row align-items-center justify-content-around"
                    >
                      {index % 2 === 0 ? (
                        <>
                          <div className="col-12 col-md-6 order-md-2 blog-image-content-wrapper">
                            <div className="block-content ">
                              <a href={post.link}>
                                <CustomImage  alt={post.title} className="img-fluid animated" src={post.image ?? ImagePlaceholder} />
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-5 order-md-1 text-left blog-content-wrapper">
                            <div className="block-content">
                              <span className="mb-2 opc-70">
                                {formatDate(post?.createdAt)}
                              </span>
                              <h2>{post.title}</h2>
                              <p className="lead">{post.description}</p>
                              <a
                                href={post.link}
                                className="link colored-link mt-3"
                              >
                                Read more ›
                              </a>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-12 col-md-6 order-1 blog-image-content-wrapper">
                            <div className="block-content">
                              <a href={post.link}>
                              <CustomImage  alt={post.title} className="img-fluid animated" src={post.image ?? ImagePlaceholder} />
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-5 order-2 text-left blog-content-wrapper">
                            <div className="block-content">
                              <span className="mb-2 opc-70">
                                {formatDate(post?.createdAt)}
                              </span>
                              <h2>{post.title}</h2>
                              <p className="lead">{post.description}</p>
                              <a
                                href={post.link}
                                className="link colored-link mt-3"
                              >
                                Read more ›
                              </a>
                            </div>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
              </ul>

              <div className="block-content text-center">
                <a className="btn btn-primary with-ico uppercase mt-5" href="#">
                  View all blog posts
                </a>
              </div>
            </div>
          </>
        );
      }}
    />
  );
};

export default NewsSection;
