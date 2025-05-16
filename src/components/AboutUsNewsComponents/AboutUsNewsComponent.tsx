'use client';

import React, { FC } from 'react';

import './AboutUsNewsComponent.scss';
import BlogCard from '@uikit/BlogCard/BlogCard';

interface IAboutUsNewsComponent {
  news: any;
}

const AboutUsNewsComponent: FC<IAboutUsNewsComponent> = ({ news }: any) => {
  return (
    <section className="news-wrapper">
      <div className="news-header">
        <h1>News About Us </h1>
        <p>
          Get the latest updates, insights, and behind-the-scenes stories about
          us
        </p>
      </div>
      <div className="news-list">
        {news.map((blog: any) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            link={blog.topicLink}
            target="_blank"
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUsNewsComponent;
