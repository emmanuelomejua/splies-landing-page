import React, { FC } from 'react';

type NType = {
    img?: boolean;
    text: string
}

const NavBtn: FC<NType> = ({img, text}) => {
  return (
    <div className='flex items-center gap-[8px]'>
        <span className="text-White2 font-[500] text-[16px]">{text}</span>
       {img && <img src="/icons/arrow-down.png" alt="" className="h-[14px] w-[14px]" />}
    </div>
  )
}

export default NavBtn;
