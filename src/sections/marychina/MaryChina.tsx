import React from 'react';
import { maryChina, mary } from '../../constant/images';

const MaryChina = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${maryChina})`, 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundColor: '#032721' }} 
      className='h-[720px] relative'>
        <img src={mary} alt="" className="absolute w-[400px] h-[160px] bottom-4 right-4" />
      </div>
  )
}

export default MaryChina;
