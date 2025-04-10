import React, { FC, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '@assets/img/1.jpg';
import Image2 from '@assets/img/18.jpg';
import Nav from '../../Common/Nav/Nav';
import Button from '@uikit/Button/Button';
import CustomImage from '@uikit/Image/Image';
import './HeroSection.scss';
import imagePlaceHolder from '@assets/img/imagePlaceholder.jpg';

const slides = [
  {
    src: Image1,
    title: 'Welcome to Mousiqua',
    subtitle: 'Music Band and Musician Bootstrap Template',
  },
  {
    src: Image2,
    title: 'Limitless',
    subtitle: 'New Album Available Everywhere',
    video: 'https://www.youtube.com/watch?v=Gc2en3nHxA4',
  },
];

const navigationItems = [
  'Home',
  'About',
  'Discography',
  'Band',
  'Tours',
  'Gallery',
  'News',
  'Contact',
];

interface IHeroSection {
  sliders: Array<{
    sliderTitle: string;
    sliderShortDescription: string;
    sliderImage: string;
    sliderVideoLink?: string;
  }>;
}
const HeroSection: FC<IHeroSection> = ({ sliders }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);

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

  const hamdleOpenMenu = () => {
    setIsOpenedMenu(true);
  };

  return (
    <section className="hero">
      {sliders && sliders.length > 0 ? (
        <Slider {...settings} className="main-slider">
          {sliders.map((slider, index) => (
            <div key={index} className="slide-item">
              <div
                className={`background-img overlay ${
                  index === activeIndex ? 'zoom' : ''
                }`}
              >
                <CustomImage
                  src={slider.sliderImage}
                  alt={slider.sliderTitle}
                />
              </div>
              <div className="container hero-content">
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <div className="inner-hero">
                      {/* {index === 0 && <div className="back-rect"></div>} */}
                      <h1 className="large text-white uppercase mb-0">
                        {slider?.sliderTitle || ''}
                      </h1>
                      <h5 className="mb-0 text-white uppercase">
                        {slider?.sliderShortDescription || ''}
                      </h5>
                      {/* {index === 0 && <div className="front-rect"></div>} */}

                      {slider.sliderVideoLink && (
                        <Button>
                          <a className="video-play-but popup-youtube"></a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="slide-item">
          <div className={`background-img overlay zoom`}>
            <CustomImage src={imagePlaceHolder} />
          </div>
          <div className="container hero-content">
            <div className="row"></div>
          </div>
        </div>
      )}

      <Nav navItems={navigationItems} />
    </section>
  );
};

export default HeroSection;
