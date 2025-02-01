import React, { FC } from 'react';

type HType = {
    plan: string;
    price: string;
    desc: string;
}

const Header:FC<HType> = ({plan, price, desc}) => {
  return (
    <div className='flex flex-col gap-2'>
        <span className="text-[#2D2D2D] text-[14px]">{plan}</span>
        <h4 className='text-[#2D2D2D] font-bold font-[700] text-[18px] leading-[24px]'>{price}</h4>
        <hr className='w-full h-1'/>
        <p className='text-[#2D2D2DCC] font-light font-[400] leading-[19px] text-[14px]'>{desc}</p>
    </div>
  )
}

export default Header;
