import React, { FC } from 'react'
import Card from './Card';
import Header from './Header';


type BType = {
    className: string;
    data: any;
}

const Board2:FC<BType> = ({className, data}) => {
  return (
    <div className={`flex flex-col w-[200px] gap-4 rounded-[4px] p-[10px] ${className}`} style={{backgroundColor: `${data.bgColor}`}}>
        <Header plan={data.plan} price={data.price} desc={data.desc}/>
        <Card data={data?.features}/>
    </div>
  )
}

export default Board2;
