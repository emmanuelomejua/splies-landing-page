import React, { useState } from 'react';

const DoubleButton = () => {
  const [active, setActive] = useState('Choose plan');

  return (
    <div className="rounded-full w-[436px] shadow-xl h-[48px] flex">
      {['Choose plan', 'Customize your plan'].map((label, index) => (
        <span
          key={index}
          className={`w-full flex items-center justify-center text-sm font-[500] leading-[17px] cursor-pointer transition-all duration-300
            ${index === 0 && 'rounded-l-full'}
            ${active === label ? 'bg-[#EAECF0] text-Green' : 'bg- text-[#9AA2A5]'}
            ${index === 1 && 'rounded-r-full'} `}
            onClick={() => setActive(label)}
        >
          {label}
        </span>
      ))}
    </div>
  );
};

export default DoubleButton;
