import React, { useState, useEffect, useRef, FC } from 'react';
import { BASE_URL } from '@utils/index';
import { fetchLazyData } from 'app/actions/serverActions';

interface ILazyLoadSection {
  className?: string;
  id: string;
  endpoint: string;
  renderData: (e: any) => any;
}

const LazyLoadSection: FC<ILazyLoadSection> = ({
  id,
  endpoint,
  renderData,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<any>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
    
      fetchLazyData(`${BASE_URL}/${endpoint}`).then(setData);

      //   fetch(`${BASE_URL}/${endpoint}`)
      //     .then((response) => response.json())
      //     .then((data) => setData(data))
      //     .catch((error) => {
      //       console.error('Error fetching data', error);
      //     });
    }
  }, [isVisible, endpoint]);

  return (
    <section ref={sectionRef} id={id} className={className}>
      {renderData(data)}
    </section>
  );
};

export default LazyLoadSection;
