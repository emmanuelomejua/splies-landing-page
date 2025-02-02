import React from 'react';


type TType = {
  className?: string;
  img?: string;
  name?: string;
  title?: string;
  text?: string;
  width: string
  height: string
}

const Testimonial = ({data}: {data: TType}) => {
  return (
    <div style={{height: data.height, width: data.width}}
      className='flex flex-col py-[32px] px-[24px] gap-[10px]'>
        <p className='font-regular font-[500] text-[16px] text-Green leading-[21px]'>{data.text}</p>

        <div className="flex gap-2">
          <img src={data.img} alt="" className="h-[48px]  w-[48px] rounded-full" />

          <div className="flex flex-col gap-2">
            <h4 className="font-semibold font-[600] leading-[24.3px] text-[18px]">{data.name}.</h4>
            <span className="font-light font-[400] text-sm leading-[18.9px] text-Green">{data.title}</span>
          </div>
        </div>
    </div>
  )
}

export default Testimonial;
