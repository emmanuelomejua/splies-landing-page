import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BenefitsCard from './BenefitsCard';
import { benefits } from '../../constant/data';


const SwiperComponent = () => {
  return (
    <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          navigation
          className="w-full"
        >
            {benefits.map((benefit) => (
                <SwiperSlide>
                    <BenefitsCard/>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default SwiperComponent;
