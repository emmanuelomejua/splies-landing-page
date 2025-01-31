import React from 'react';
import { maryChina } from '../../constant/images';

const MaryChina = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${maryChina})`, 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundColor: '#032721' }} 
      className='h-[720px]'>

      </div>
  )
}

export default MaryChina;
