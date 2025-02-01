import React from 'react'
import H1 from '../../components/H1';
import P from '../../components/P';
import Button from '../../components/buttons/Button';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperComponent from './Swiper';


const CoreBenefits = () => {
  return (
    <div className='flex flex-col gap-4 my-[50px] mx-auto max-w-[1200px] w-full p-4'>
        <div className="flex justify-between items-center">
            <div className="flex flex-col w-[590px]">
                <H1 text='Our core benefits' className='text-[#001914]'/>
                <P text='Our all-in-one management software automates scheduling, manages customer data, processes payments, and more. Perfect for businesses like yours.' className='text-[#001914]'/>
            </div>

          <Button text='Get Started' className='bg-Green text-White2 w-[165px] h-[45px]'/>
        </div>

        <SwiperComponent />

    </div>
  )
}

export default CoreBenefits;
