import React from 'react'

const H1 = ({text, className}: {text: string, className: string}) => {
  return (
    <h1 className={`font-[600] text-[45px] ${className}`}>{text}</h1>
  )
}

export default H1
