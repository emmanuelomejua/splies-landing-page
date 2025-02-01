import React from 'react'
import H1 from '../../components/H1';
import DoubleButton from './DoubleButton';
import SubMenu from './SubMenu';
import Features from './Features';

const Price = () => {
  return (
    <div className='bg-[#FFFDF5] py-[50px] flex flex-col items-center justify-center gap-[40px]'>
      <H1 text='Pricing ' className='text-center' />
      <DoubleButton/>
      <SubMenu/>
      <Features/>
    </div>
  )
}

export default Price;


// bg-gradient-to-r from-[#FFFDF5] to-[#16796F]