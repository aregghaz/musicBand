'use client';

import ImagePlaceholder from '@assets/img/imagePlaceholder.jpg';
import Image, { StaticImageData } from 'next/image';
import { FC, useEffect, useState } from 'react';

interface CustomImage {
  src: string | StaticImageData | null;
  alt?: string;
  className?: string;
}

const CustomImage: FC<CustomImage> = ({ src, alt = '', className = '' }) => {
  const [imageSrc, setImageSrc] = useState(src ?? ImagePlaceholder);

  const handleError = () => {
    setImageSrc(ImagePlaceholder);
  };

  useEffect(() => {
    if (!src) {
      handleError();
    } else {
      setImageSrc(src);
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
