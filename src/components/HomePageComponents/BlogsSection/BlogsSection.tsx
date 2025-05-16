import React, { FC } from 'react';
import LazyLoadSection from '../../Common/LazyLoadSection/LazyLoadSection';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';
import { STORAGE_URL, formatDate } from '@utils/index';
import ImagePlaceholder from '@assets/img/imagePlaceholder.jpg';
import './BlogsSection.scss';

import CustomImage from '@uikit/Image/Image';
import Link from 'next/link';

interface IBlogsSection {
  blogPosts: any;
}

const BlogsSection: FC<IBlogsSection> = ({ blogPosts }) => {
  return (
    <>
      <section id="blog" className="news main">
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
                          {/* <a href={post.link}> */}
                          <CustomImage
                            alt={post.title}
                            className="img-fluid scaled"
                            src={`${STORAGE_URL}${post.image}`}
                          />
                          {/* </a> */}
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-5 order-md-1 text-left blog-content-wrapper">
                        <div className="block-content">
                          <span className="mb-2 opc-70">
                            {formatDate(post?.createdAt)}
                          </span>
                          <h2>{post.title}</h2>
                          <p className="lead">{post.description}</p>
                          <Link
                            href={`/blogs/${post.id}`}
                            className="link colored-link mt-3 cursor-pointer"
                          >
                            Read more ›
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-12 col-md-6 order-1 blog-image-content-wrapper">
                        <div className="block-content">
                          {/* <a href={post.link}> */}
                          <CustomImage
                            alt={post.title}
                            className="img-fluid scaled"
                            src={`${STORAGE_URL}${post.image}`}
                          />
                          {/* </a> */}
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-5 order-2 text-left blog-content-wrapper">
                        <div className="block-content">
                          <span className="mb-2 opc-70">
                            {formatDate(post?.createdAt)}
                          </span>
                          <h2>{post.title}</h2>
                          <p className="lead">{post.description}</p>
                          <Link
                            href={`/blogs/${post.id}`}
                            className="link colored-link mt-3"
                          >
                            Read more ›
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </li>
              ))}
          </ul>

          <div className="block-content text-center">
            <Link
              className="btn btn-primary with-ico uppercase mt-5"
              href="/blogs"
            >
              View all blog posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsSection;
