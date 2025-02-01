import React from 'react'
import H1 from '../../components/H1';
import DoubleButton from './DoubleButton';

const Price = () => {
  return (
    <div className='bg-gradient-to-r from-[#FFFDF5] to-[#16796F] py-[50px] flex flex-col items-center justify-center gap-3'>
      <H1 text='Pricing ' className='text-center' />
      <DoubleButton/>
    </div>
  )
}

export default Price;
