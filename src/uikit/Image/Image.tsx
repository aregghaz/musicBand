'use client';

import ImagePlaceholder from '@assets/img/imagePlaceholder.jpg';
import Image, { StaticImageData } from 'next/image';
import { FC, useEffect, useState } from 'react';

interface ICustomImage {
  src: string | StaticImageData | null;
  alt?: string;
  className?: string;
}

const CustomImage: FC<ICustomImage> = ({ src, alt = '', className = '' }) => {
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(
    ImagePlaceholder
  );

  const handleError = () => {
    setImageSrc(ImagePlaceholder);
  };

  const isInvalidSrc = (value: string | null | undefined) => {
    if (!value) return true;

    const lowerValue = value.toLowerCase();

    return (
      lowerValue.includes('null') ||
      lowerValue.includes('undefined') ||
      lowerValue.trim() === ''
    );
  };

  useEffect(() => {
    if (typeof src === 'string') {
      if (isInvalidSrc(src)) {
        setImageSrc(ImagePlaceholder);
      } else {
        setImageSrc(src);
      }
    } else if (src) {
      setImageSrc(src);
    } else {
      setImageSrc(ImagePlaceholder);
    }
  }, [src]);

  return (
    <Image
      className={className}
      src={imageSrc}
      alt={alt}
      layout="fill"
      onError={handleError}
      placeholder="blur"
      blurDataURL={'https://picsum.photos/id/237/200/300'}
    />
  );
};

export default CustomImage;
