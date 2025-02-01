
import React from 'react'

const Title = ({title}: {title: string}) => {
  return (
    <div className='flex items-center justify-between px-2'>
        <h4 className="font-[500] text-[18px] leading-[20px] text-[#2D2D2D]">{title}</h4>
        <img src="/icons/line.svg" alt="" className="h-[16px] w-[16px]" />
    </div>
  )
}

export default Title;
