import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col gap-2'>
        <span className="text-[#2D2D2D]">Basic plan</span>
        <h4 className='text-[#2D2D2D] font-bold font-[700] text-[21px] leading-[24px]'>Free</h4>
        <hr className='w-full h-1'/>
        <p className='text-[#2D2D2DCC] font-light font-[400] leading-[19px]'>Your starter plan to get started with your beauty clients.</p>
    </div>
  )
}

export default Header;
