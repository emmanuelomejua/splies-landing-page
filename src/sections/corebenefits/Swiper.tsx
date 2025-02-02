import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BenefitsCard from './BenefitsCard';
import { benefits } from '../../constant/data';



const SwiperComponent = () => {

  const [progress, setProgress] = useState(0);

  return (
    <div className='flex flex-col gap-3'>
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
          onProgress={(swiper: any, progress: number) => setProgress(progress * 100)}
        >
            {benefits.map((benefit) => (
                <SwiperSlide>
                    <BenefitsCard 
                      title={benefit.title} 
                      text={benefit.text} 
                      img={benefit.img} 
                      bgColor={benefit.bgColor} 
                      bgColor1={benefit.bgColor1}/>
                </SwiperSlide>
            ))}
        </Swiper>

        <div className="px-2 w-full">
          <label htmlFor="file"></label>
          <progress id="file" max="100" value={progress}  className='h-1 rounded-tl-full w-full'>{progress}%</progress>
        </div>
    </div>
  )
}

export default SwiperComponent;
