import React from 'react'
import H1 from '../../components/H1';
import Button from '../../components/buttons/Button';
import Card from './Card';
import { getstarted, getstarted1, getstarted2 } from '../../constant/images';


const list = [
  {
    text: 'For you',
    img: getstarted
  },
  {
    text: 'For your business',
    img: getstarted2
  },
  {
    text: 'For your customers',
    img: getstarted1
  },
]

const GetStarted = () => {
  return (
    <div className='bg-Green min-h-[870px] px-4 gap-4 flex flex-col'>
        <H1 text='Get started with Splice' className=' text-center mt-[50px]' white/>
        <Button text='Get started' className='bg-White2 text-Green mx-auto text-center flex items-center justify-center w-[200px] h-[48px] text-[18px]' />

        <div className="flex gap-5 mt-auto justify-around w-full">
          {list.map((l) => (
            <Card data={l}/>
          ))
          }

        </div>
    </div>
  )
}

export default GetStarted;
