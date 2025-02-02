import React, { FC, useState } from 'react'
import P from '../../components/P';


type BType = {
    title: string;
    text: string;
    img: string;
    bgColor: string;
    bgColor1: string;
}


const BenefitsCard: FC<BType> = ({title, text, img, bgColor, bgColor1}) => {

  const [hovered, setHovered] = useState(false);

  return (
    <div 
      style={{ backgroundColor: hovered ? bgColor1 : bgColor }} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='hover:text-White2 flex flex-col gap-4 w-[540] h-[450px] rounded-[8px]'>

        <div className="flex flex-col p-4">
            <h4 className='font-semibold font-600 leading-[32px]'>{title}</h4>
            <P text={text} className='' />
        </div>

        <img src={img} alt="" className="h-[300px] ml-4" />
    </div>
  )
}

export default BenefitsCard;
