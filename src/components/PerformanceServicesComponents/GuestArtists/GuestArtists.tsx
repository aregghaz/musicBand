'use client';

import './guestArtists.scss';
import { useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade, Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { openGuestModal } from '../../../store/slices/guestArtistsSlice';
import GuestModal from '@components/PerformanceServicesComponents/GuestModal/GuestModal';
import ArrowLeft from '../../../../public/icons/leftArrow';
import ArrowRight from '../../../../public/icons/arrowRight';

export default function GuestArtists() {
  const guestArtists = useSelector(
    (state: RootState) => state.guestArtists.artists
  );
  const [effect, setEffect] = useState<'coverflow' | 'fade'>('coverflow');

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 820) {
        setEffect('fade');
      } else {
        setEffect('coverflow');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="guest" id="Guest">
      <div className="topTitle">
        <h2>Guest Artists</h2>
      </div>
      <div className="globContainer">
        <Swiper
          effect={effect}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={window.innerWidth <= 820 ? 1 : 3}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: false,
          }}
          fadeEffect={{ crossFade: true }}
          modules={[Navigation, EffectFade]}
          className="guestSwiper"
        >
          {guestArtists.map((artist) => (
            <SwiperSlide key={artist.id} className="guestSlide">
              <div
                className="guestCard"
                onClick={() => dispatch(openGuestModal(artist))}
              >
                <Image
                  src={artist.imageUrl}
                  alt={artist.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="leftLabel">
                  <p className="artistName">{artist.name}</p>
                  <span className="artistRole">{artist.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev">
          <ArrowLeft />
        </div>
        <div className="swiper-button-next">
          <ArrowRight />
        </div>
        <GuestModal />
      </div>
    </section>
  );
}
