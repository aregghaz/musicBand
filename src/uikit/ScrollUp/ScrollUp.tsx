import React, { useState, useEffect } from 'react';
import './ScrollUp.scss';
import { useVisibility } from '../../hooks/useVIsibility';

const ScrollUp = () => {
  const { isVisible } = useVisibility();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-to-top fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-opacity ${
        isVisible ? 'visible' : 'hidden'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="icon-angle-up"></i>
    </button>
  );
};

export default ScrollUp;
