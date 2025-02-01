import React from 'react'

const DoubleButton = () => {
  return (
    <div className='rounded-full w-[436px] shadow-xl h-[48px] flex'>
        <span className="w-full rounded-l-full flex items-center justify-center text-Green text-sm font-[500] leading-[17px] cursor-pointer font-regular">Choose plan</span>
        <span className="bg-[#EAECF0] w-full rounded-r-full flex items-center justify-center text-[#9AA2A5] leading-[17px] text-sm font-[500] cursor-pointer font-regular">Customize your plan</span>
    </div>
  )
}

export default DoubleButton;
