import React from 'react'
import H1 from '../../components/H1';
import Button from '../../components/buttons/Button';

const GetStarted = () => {
  return (
    <div className='bg-Green h-[800px] py-5'>
        <H1 text='Get started with Splice' className='text-White2 text-center' />
        <Button text='Get started' className='bg-White2 text-Green mx-auto flex' />
    </div>
  )
}

export default GetStarted;
