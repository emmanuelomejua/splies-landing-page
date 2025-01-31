import React from 'react'

const P = ({text, className}: {text: string, className: string}) => {
  return (
    <p className={`${className} font-[500] text-[16px]`}>{text}</p>
  )
}

export default P;
