import React, { FC } from 'react'
import Card2 from '../cards/Card2';
import Header from '../locals/Header';


type BType = {
    className: string;
    data: any;
    isBooking?: boolean;
    others?: boolean
}

const Board2:FC<BType> = ({className, data, isBooking, others }) => {
  return (
    <div 
        className={`flex flex-col w-[200px] gap-4 rounded-[4px] p-[10px] ${others && 'pt-[69px]'} ${className}`} 
        style={{backgroundColor: `${data.bgColor}`, height:  `${data?.width}`, }}>

       {isBooking && 
          <Header plan={data.plan} 
            price={data.price} 
            desc={data.desc} 
            text={data?.text} text1={data?.text1} 
            key={data}/>}
        {
          data?.features?.map((d: any) => (
              <Card2 data={d} className='mt-[100px]' key={data} />
          ))
        }
    </div>
  )
}

export default Board2;
