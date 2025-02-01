import React, { FC } from 'react';

type CType = {
    data: any;
    className: string;
}

const Card2: FC<CType> = ({data, className}) => {
  return (
    <div className='flex items-center justify-center flex-col p-3 gap-2'>
         {data?.map((d: any) => (
            <>
             {<img src={d?.icon} alt="" className="h-[16px] w-[16px]" />}
             <hr className='h-1 w-full' />
             </>
         ))
        }
    </div>
  )
}

export default Card2;
