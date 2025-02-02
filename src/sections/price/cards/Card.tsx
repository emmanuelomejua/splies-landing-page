import React, { FC } from 'react';

type CardType = {
    soon?: boolean;
    data: any;
    className?: string;
}

const Card:FC<CardType> = ({ data, className }) => {


  return (
    <div className={`flex flex-col gap-2 px-1 h-[43px] ${className}`}>
  
        <section className='flex items-center gap-2 h-full'>
        <span className='text-[14px] font-[400] font-regular leading-[19px]'>{data?.name}</span>

        {data?.soon && <span className='p-2 bg-[#9C7B130D] text-[#C6990C] text-[10px] leading-[10px] font-bold font-[700] rounded-[10px] flex justify-center items-center'>{data?.soon}</span>}
        </section>
        <hr className='h-1 w-full mt-2'/>
    </div>
  )
}

export default Card;
