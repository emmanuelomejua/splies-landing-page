import React, { FC } from 'react'
import Card from '../cards/Card';
import Title from '../locals/Title';




type BType = {
    text: string;
    className: string;
    isFeature?: boolean;
    data: any[]
}

const Board:FC<BType> = ({text, className, isFeature, data}) => {
  return (
    <div className={`flex flex-col gap-4 rounded-[4px] px-[10px] ${className}`}>
       {isFeature && <div className="h-[160px] flex items-center">
          <h4 className='text-[#886d6d] font-bold font-[600] text-[24px] leading-[27px]'>Features</h4>
        </div>}
        <Title title={text}/>
        {data.map((h: any) => (
            <Card data={h}/>
        ))}
    </div> 
  )
}

export default Board;

