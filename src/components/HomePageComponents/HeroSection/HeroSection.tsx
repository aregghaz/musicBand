import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '@assets/img/1.jpg';
import Image2 from '@assets/img/18.jpg';
import Nav from '../../Common/Nav/Nav';
import Button from '@uikit/Button/Button';
import CustomImage from '@uikit/Image/Image';


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

const HeroSection = () => {
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
    arrows: true,
    pauseOnHover: false,
    afterChange: (currentIndex:any) => setActiveIndex(currentIndex),
    draggable: true,
    swipe: true,
    touchThreshold: 10,
  };

  const hamdleOpenMenu = () => {
    setIsOpenedMenu(true);
  };

  return (
    <section className="hero">
      <Slider {...settings} className="main-slider">
        {slides.map((slide, index) => (
          <div key={index} className="slide-item">
            <div
              className={`background-img overlay ${
                index === activeIndex ? 'zoom' : ''
              }`}
            >
              <CustomImage src={slide.src} alt={slide.title} />
            </div>
            <div className="container hero-content">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <div className="inner-hero">
                    {index === 0 && <div className="back-rect"></div>}
                    <h1 className="large text-white uppercase mb-0">
                      {slide.title}
                    </h1>
                    <h5 className="mb-0 text-white uppercase">
                      {slide.subtitle}
                    </h5>
                    {index === 0 && <div className="front-rect"></div>}
                    {slide.video && (
                      <Button
                      >
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

      <Nav navItems={navigationItems} />
    </section>
  );
};

export default HeroSection;
