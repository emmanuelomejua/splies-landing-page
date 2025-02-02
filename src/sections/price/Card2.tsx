import React, { FC } from 'react';

type CType = {
    data: any;
    className: string;
}

const Card2: FC<CType> = ({data, className}) => {
  return (
    <div className={`flex items-center justify-center flex-col p-3 gap-2 h-[43px]`}>
        {<img src={data.icon} alt="" className="h-[16px] w-[16px]" />}
        {data?.soon && <span className='p-2 bg-[#9C7B130D] text-[#C6990C] text-[10px] leading-[10px] font-bold font-[700] rounded-[10px] flex justify-center items-center'>{data?.soon}</span>}
        <hr className='h-1 w-full mt-2' />
    </div>
  )
}

export default Card2;
