import React from 'react';
import DesignBtn from '../../components/buttons/DesignBtn';

const Card = ({data}: {data: any}) => {
  return (
    <div className='flex flex-col items-center gap-[100px]'>
      <DesignBtn text={data.text} className='mx-auto mt-auto' />
        
      <img src={data.img} alt="" className="mt-auto" />
    </div>
  )
}

export default Card;
