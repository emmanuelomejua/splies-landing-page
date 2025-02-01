import React, { FC } from 'react';

type CardType = {
    img?: boolean;
    soon?: boolean;
    data: any;
    className?: string;
    icon?: string
}

const Card:FC<CardType> = ({img, data, className, icon}) => {
  return (
    <div className={`flex flex-col gap-2 px-4 py-2 ${className} ${img && 'justify-center items-center'}`}>
        {data?.icon && <img src="/icons/solid.svg" alt="" className="h-[20px] w-[20px]" />}
        <section className='flex items-center gap-2'>
        <span className='text-[14px] font-[400] font-regular leading-[19px]'>{data?.name}</span>

        {data?.soon && <span className='p-2 bg-[#9C7B130D] text-[#C6990C] text-[10px] leading-[10px] font-bold font-[700] rounded-[10px] flex justify-center items-center'>{data?.soon}</span>}
        </section>
        <hr/>

    </div>
  )
}

export default Card;
