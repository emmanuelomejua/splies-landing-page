import React, { FC } from 'react'
import Card2 from './Card2';
import Header from './Header';


type BType = {
    className: string;
    data: any;
}

const Board2:FC<BType> = ({className, data}) => {
  return (
    <div 
        className={`flex flex-col w-[200px] gap-4 rounded-[4px] p-[10px] ${className}`} 
        style={{backgroundColor: `${data.bgColor}`, height:  `${data?.width}`, }}>
        <Header plan={data.plan} price={data.price} desc={data.desc} text={data?.text} text1={data?.text1} key={data}/>
        {/* <Card2 data={data?.features} className='mt-[100px]' key={data}/> */}
    </div>
  )
}

export default Board2;
