import React from 'react'
import H1 from '../../components/H1';
import P from '../../components/P';
import Testimonial from './Testimonial';
import { testimonial } from '../../constant/data';

const WhatClient = () => {
  return (
    <div className='flex justify-center items-center my-[50px] flex-col gap-[16px]'>
      <span className="rounded-full border-[1px] text-Green py-[10px] px-[24px] font-[500] text-sm w-max">TESTIMONIALS</span>
      <H1 text='What our Clients Say' className='text-[#001914]' />
      <P text='See how Splice has transformed businesses. Here’s what our clients have to say.' className='text-[#001914]' />


      <div className="flex flex-wrap justify-between gap-[30px] max-w-[994px] w-full">
      {testimonial.map((data, index) => (
          <div
            key={index}
            className={` ${index < 3 ? 'flex justify-center' : 'flex items-end'} odd:bg-[#16796F08] odd:shadow-sm rounded-[8px]`}
          >
            <Testimonial data={data} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatClient;
