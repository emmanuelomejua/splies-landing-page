import React, { FC } from 'react';

type HType = {
    plan: string;
    price: string;
    desc: string;
    text: string;
    text1: string;
}

const Header:FC<HType> = ({plan, price, desc, text, text1}) => {
  return (
    <div className='flex flex-col gap-2 h-[160px]'>
        <span className="text-[#2D2D2D] text-[14px]">{plan}</span>
        <h4 className='text-[#2D2D2D] font-bold font-[700] text-[18px] leading-[24px]'>{price}</h4>
        <hr className='w-full h-1'/>
        <p className='text-[#2D2D2DCC] font-light font-[400] leading-[19px] text-[14px]'>{desc}</p>

        <p className='text-[#2D2D2DCC] font-light font-[500] leading-[19px] text-[14px] mt-[30px] text-center'>{text}</p>
        <p className='text-[#2D2D2DCC] font-bold font-[600] leading-[19px] text-[14px] text-center'>{text1}</p>
    </div>
  )
}

export default Header;
