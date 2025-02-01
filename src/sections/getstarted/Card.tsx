import React from 'react';
import DesignBtn from '../../components/buttons/DesignBtn';

const Card = ({data}: {data: any}) => {
  return (
    <div className='flex flex-col items-center gap-6'>
      <DesignBtn text={data.text} className='mx-auto mt-4' />
        
      <img src={data.img} alt="" className="" />
    </div>
  )
}

export default Card;
