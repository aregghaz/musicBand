import React from 'react';
import BlogComponent from '@components/BlogsComponents/BlogComponent';
import { BASE_URL } from '@utils/index';
import AboutUsNewsComponent from '@components/AboutUsNewsComponents/AboutUsNewsComponent';

export const metadata = {
  title: 'Music Lab',
  openGraph: {
    title: 'News about us',
  },
};

const BlogPage = async () => {
  const res = await fetch(`${BASE_URL}/about-us-news`, {
    cache: 'no-store',
  });

  const aunews = await res.json();

  return <AboutUsNewsComponent news={aunews?.data || []} />;
};

export default BlogPage;
