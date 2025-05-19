import React, { useState, useEffect, FC } from 'react';
import './ReviewsSection.scss';
import Slider from 'react-slick';
import { BASE_URL } from '@utils/index';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';

interface IReviews {
  reviews: {
    id: number;
    reviewerName: string;
    reviewerDescription: string;
    reviewHide: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
}

const ReviewsSection: FC<IReviews> = ({ reviews = [] }) => {
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerDescription, setReviewerDescription] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName || !reviewerDescription) {
      setMessage('Please fill all fields');
      return;
    }
    setIsSubmitting(true);
    setMessage('');
    try {
      const response = await fetch(`${BASE_URL}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reviewerName, reviewerDescription }),
      });
      if (!response.ok) throw new Error('Failed to submit review');
      setMessage('Review submitted! Awaiting admin approval.');
      setReviewerName('');
      setReviewerDescription('');
    } catch (error) {
      setMessage('Error submitting review');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Slick settings
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviewsList = reviews?.map((review) => (
    <div key={review.id + review.reviewerName} className="slide">
      <div className="review-card">
        <h3 className="card-title">{review.reviewerName}</h3>
        <p className="card-description">{review.reviewerDescription}</p>
      </div>
    </div>
  ));

  const renderReviews = () => {
    if (reviews?.length >= 4) {
      return <Slider {...slickSettings}>{reviewsList}</Slider>;
    } else if (reviews?.length > 0 && reviews.length < 4) {
      return (
        <div className="reviews-without-slider-wrapper">{reviewsList}</div>
      );
    }

    return <p className="no-reviews">No reviews available</p>;
  };

  return (
    <section className="reviews-section">
      <div className="container">
        <SectionTitle title="Our Reviews" />

        <div className="slider-wrapper">{renderReviews()}</div>

        <div className="review-form">
          <h3 className="form-title">Share Your Review</h3>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <input
                type="text"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                placeholder="Your Name"
                className="form-input"
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <textarea
                value={reviewerDescription}
                onChange={(e) => setReviewerDescription(e.target.value)}
                placeholder="Your Review"
                className="form-textarea"
                rows={4}
                disabled={isSubmitting}
              />
            </div>
            {message && (
              <p
                className={`form-message ${message.includes('Error') || message.includes('fill') ? 'error' : 'success'}`}
              >
                {message}
              </p>
            )}
            <button
              type="submit"
              className="btn btn-primary uppercase border-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
