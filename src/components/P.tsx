import React from 'react'

const P = ({text, className}: {text: string, className: string}) => {
  return (
    <p className={`${className} font-[500] text-[16px] font-regular`}>{text}</p>
  )
}

export default P;
