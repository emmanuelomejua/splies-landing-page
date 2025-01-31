import React from 'react'

const Title = ({text}: {text: string}) => {
  return (
    <span className='rounded-full border-[1px] text-Green py-[10px] px-[24px] font-[500] text-sm w-max'>{text}</span>
  )
}

export default Title;
