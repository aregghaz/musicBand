'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import './styles/not-found/notFound.scss';

const NotFound: FC = () => {
  const router = useRouter();

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-description">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <button className="back-button" onClick={() => router.push('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
