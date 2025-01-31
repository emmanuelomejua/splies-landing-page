import React, { FC } from 'react';


type BtnType = {
  className: string;
  text: string;
}

const Button: FC<BtnType> = ({className, text}) => {
  return (
    <button className={`py-[10px] px-[24px] rounded-full text-sm font-[600] ${className}`}>
      {text}
    </button>
  )
}

export default Button;
