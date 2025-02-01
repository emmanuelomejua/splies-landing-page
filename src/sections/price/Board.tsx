import React, { FC } from 'react'
import Card from './Card';
import Title from './Title';
import { headers } from '../../constant/data';



type BType = {
    text: string;
    className?: string;
}

const Board:FC<BType> = ({text, className}) => {
  return (
    <div className={`flex flex-col gap-4 rounded-[4px] p-[10px] ${className}`}>
        <Title title={text}/>
        {headers.map((h) => (
            <Card data={h}/>
        ))}
    </div> 
  )
}

export default Board;


// bg-[#C34C2A0A]