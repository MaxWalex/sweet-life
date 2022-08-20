import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';
import { EffectFade } from 'swiper';

import keks from '../assets/images/keks.png'
import keks2 from '../assets/images/keks2.png'
import keks3 from '../assets/images/keks3.png'
import keks4 from '../assets/images/keks4.png'

import 'swiper/css';

function Main() {

    SwiperCore.use([Autoplay]);

    const mainSlider = [
        keks2, keks, keks3
    ]

    const secondSlider = [
        keks2, keks, keks3, keks4
    ]

  return (
    <div className="container">
        <Swiper modules={[EffectFade]} id="main_slider" effect="fade">
            {mainSlider.map(slide => {
                return <SwiperSlide>
                                <img src={slide} alt="keks milk" />
                            </SwiperSlide>
            })}
        </Swiper>

        <Swiper id="second_slider"
            spaceBetween={50}
            slidesPerView={4}
            loop='true'
            centeredSlides='true'
            speed={2000}
            autoplay={{ 
                enabled: true,
                delay: 1,
            }}
        >
            {secondSlider.map(slide => {
                return <SwiperSlide>
                                <div className='second_slider-img'>
                                    <img src={slide} alt="keks milk" />
                                </div>
                            </SwiperSlide>
            })}
        </Swiper>
    </div>
  )
}

export default Main