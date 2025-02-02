import React, { FC } from 'react';


type EType = {
    text: string
}

const Extras:FC<EType> = ({text}) => {
  return (
    <div className='flex flex-row items-center  justify-between w-[231px] mt-[50px]'>
        <p className="text-[#2D2D2D] font-[500] font-semibold text-[18px] leading-[21px]">{text}</p>
        <img src="/icons/plus.svg" alt="" className="h-[16px] w-[16px]" />
    </div>
  )
}

export default Extras;
