import React from 'react';

type HType = {
  text: string;
  className?: string;
  white?: boolean;
}

const H1 = ({text, className, white}: HType) => {
  return (
    <h1 className={`font-[600] text-[45px] font-semibold ${white ? 'text-White2': 'bg-clip-text text-transparent bg-gradient-to-r from-[#001914] to-[#69958C] '} ${className}`}>{text}</h1>
  )
}

export default H1
