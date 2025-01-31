import React from 'react'
import H1 from '../../components/H1';
import P from '../../components/P';

const WhatClient = () => {
  return (
    <div className='flex justify-center items-center my-[100px] flex-col'>
      <span className="rounded-full border-[1px] text-Green py-[10px] px-[24px] font-[500] text-sm w-max">TESTIMONIALS</span>
      <H1 text='What our Clients Say' className='text-[#001914]' />
      <P text='See how Splice has transformed businesses. Here’s what our clients have to say.' className='text-[#001914]' />


      <div className="flex w-[994px]">

      </div>
    </div>
  )
}

export default WhatClient;
