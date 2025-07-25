'use client';

import { useState, useRef } from 'react';
import './portfolio.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { moveNext, movePrev } from '../../../store/slices/portfolioSlice';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowLeft from '../../../../public/icons/leftArrow';
import ArrowRight from '../../../../public/icons/arrowRight';

export default function Portfolio() {
  const items = useSelector((state: RootState) => state.portfolio.items);
  const dispatch = useDispatch();

  const [offset, setOffset] = useState(-1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const extendedItems = [
    items[items.length - 1],
    ...items.slice(0, 4),
    items[4],
  ];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setOffset((prev) => prev - 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setOffset((prev) => prev + 1);
  };

  const onTransitionEnd = () => {
    let newOffset = offset;

    if (offset === -2) {
      dispatch(moveNext());
      newOffset = -1;
    } else if (offset === 0) {
      dispatch(movePrev());
      newOffset = -1;
    } else {
      setIsTransitioning(false);
      return;
    }

    setOffset(newOffset);

    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateX(${newOffset * 25}%)`;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = 'transform 0.5s ease';
            setIsTransitioning(false);
          }
        });
      });
    }
  };

  // Свайп-события
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const deltaX = touchStartX.current - touchEndX.current;

      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="portfolioWrapper" id="portfolio">
      <button className="arrow left" onClick={handlePrev}>
        <ArrowLeft width={30} height={30} />
      </button>

      <div className="portfolio">
        <div
          ref={trackRef}
          className="portfolioTrack"
          style={{
            transform: `translateX(${offset * 25}%)`,
            transition: isTransitioning ? 'transform 0.5s ease' : 'none',
          }}
          onTransitionEnd={onTransitionEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {extendedItems.map((item, i) => (
            <Link
              href={`/performance-services/artists/${item.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolioItem"
              key={`${item.id}-${i}`}
            >
              <div className="itemsWrapper">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={300}
                  height={300}
                />
                <div className="bottomInfoWrapper">
                  <h2>{item.name}</h2>
                  <ArrowRight width={30} height={30} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={handleNext}>
        <ArrowRight width={30} height={30} />
      </button>
    </section>
  );
}
