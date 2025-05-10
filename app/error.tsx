'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import './styles/error/error.scss';

interface ErrorPageProps {
  error?: Error;
  reset?: () => void;
}

const ErrorPage: FC<ErrorPageProps> = ({ error, reset }) => {
  const router = useRouter();

  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">Something went wrong</h1>
        <p className="error-description">
          Our developers are working hard to fix this issue. Please try again
          later.
        </p>
        <div className="error-actions">
          <button className="back-button" onClick={() => router.push('/')}>
            Back to Home
          </button>
          {reset && (
            <button className="retry-button" onClick={reset}>
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
