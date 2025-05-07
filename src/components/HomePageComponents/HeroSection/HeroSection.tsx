'use client';

import React, { FC, useState } from 'react';
import Slider from 'react-slick';
import Image1 from '@assets/img/1.jpg';
import Image2 from '@assets/img/18.jpg';
import Nav from '../../Common/Nav/Nav';
import Button from '@uikit/Button/Button';
import CustomImage from '@uikit/Image/Image';
import './HeroSection.scss';
import { STORAGE_URL } from '@utils/index';
import EmbeddedModal from '@components/Common/FrameEmbeddedModal/EmbeddedModal';
import { useWindowWidth } from 'src/hooks/useWindowWidth';

const defaultSlides = [
  {
    sliderImage: Image1.src,
    sliderTitle: 'Welcome to Music Lab',
    sliderShortDescription: 'Where Rhythm Meets Soul',
    sliderVideoLink: null,
    sliderImageMob: Image1.src,
  },
];

interface IHeroSection {
  sliders: Array<{
    sliderTitle: string;
    sliderShortDescription: string;
    sliderImage: string;
    sliderImageMob?: string | null;
    sliderVideoLink?: string;
  }>;
}
const HeroSection: FC<IHeroSection> = ({ sliders }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { width: windowWith } = useWindowWidth();

  const [openModal, setModalOpen] = useState(false);
  const [currentVideoLink, setCurrentVideoLink] = useState('');

  const openVideoModal = (videoLink: string) => {
    setCurrentVideoLink(videoLink);
    setModalOpen(true);
  };

  const closeVideoModal = () => {
    setCurrentVideoLink('');
    setModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    afterChange: (currentIndex: any) => setActiveIndex(currentIndex),
    draggable: true,
    swipe: true,
    touchThreshold: 10,
  };

  const finalSliders = sliders && sliders.length > 0 ? sliders : defaultSlides;

  return (
    <section className="hero">
      {finalSliders && (
        <Slider {...settings} className="main-slider">
          {finalSliders.map((slider, index) => {
            const imageSource =
              windowWith < 475 && slider?.sliderImageMob
                ? `${STORAGE_URL}${slider?.sliderImageMob}`
                : `${STORAGE_URL}${slider.sliderImage}`;

            return (
              <div key={index} className="slide-item">
                <div
                  className={`background-img overlay ${
                    index === activeIndex ? 'zoom' : ''
                  }`}
                >
                  <CustomImage src={imageSource} alt={slider.sliderTitle} />
                </div>
                <div className="container hero-content">
                  <div className="row">
                    <div className="col-sm-12 text-center">
                      <div className="inner-hero">
                        <h1 className="large text-white uppercase mb-0">
                          {slider?.sliderTitle || ''}
                        </h1>
                        <h5 className="mb-0 text-white uppercase">
                          {slider?.sliderShortDescription || ''}
                        </h5>
                        {slider.sliderVideoLink && (
                          <Button
                            onClick={() =>
                              openVideoModal(slider?.sliderVideoLink as string)
                            }
                          >
                            <a className="video-play-but popup-youtube"></a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      )}

      {openModal && (
        <EmbeddedModal
          closeModal={closeVideoModal}
          videoLink={currentVideoLink}
        />
      )}
    </section>
  );
};

export default HeroSection;
