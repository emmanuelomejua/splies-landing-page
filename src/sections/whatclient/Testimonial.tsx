import React from 'react';


type TType = {
  className?: string;
  img?: string;
  name?: string;
  title?: string;
  text?: string;
}

const Testimonial = ({data}: {data: TType}) => {
  return (
    <div className='flex flex-col p-4 gap-2'>
        <p className='font-regular font-[500] text-[16px] text-Green leading-[21px]'>“Splice has truly transformed our salon operations. Our booking efficiency has skyrocketed, and we’ve seen a significant increase in appointments. Managing schedules and customer data has never been this seamless. We’re thrilled with the results!”</p>

        <div className="flex gap-2">
          <img src="/testimonial/laura.svg" alt="" className="h-[48px]  w-[48px] rounded-full" />

          <div className="flex flex-col gap-2">
            <h4 className="font-semibold font-[600] leading-[24.3px] text-[18px]">Sam M.</h4>
            <span className="font-light font-[400] text-sm leading-[18.9px]">Salon Owner</span>
          </div>
        </div>
    </div>
  )
}

export default Testimonial;
