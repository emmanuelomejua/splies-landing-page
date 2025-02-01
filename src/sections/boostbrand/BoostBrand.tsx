import React from 'react'
import H1 from '../../components/H1';
import P from '../../components/P';
import Button from '../../components/buttons/Button';
import { booking1, booking17, booking2 } from '../../constant/images'



const BoostBrand = () => {
  return (
    <div className='bg-Green h-[850px] flex p-4 gap-[100px]'>
        <div className="flex flex-col flex-1 justify-center ml-auto gap-5 p-[20px]">
            <H1 text='Boost Your Brand with Effortless Online Engagement' className='text-White2' /> 
            <P text='Elevate your brand with a sleek online platform where customers can effortlessly book appointments and stay engaged with your services.' className='text-White2 w-[472px]' />

            <Button text='Get Started' className='bg-White2 text-Green w-max' />
        </div>

        <div className="relative flex flex-1 items-center justify-center">
            <img src={booking2} alt="" className="absolute left-[-100px] top-[50px] w-[220px] h-[460px] z-0 opacity-90 shadow-md rounded-2xl" />
            <img src={booking17} alt="" className="w-[250px] h-[505px] z-10 relative shadow-lg rounded-2xl" />
            <img src={booking1} alt="" className="absolute right-[-70px] top-[260px] w-[220px] h-[460px] z-0 opacity-90 shadow-md rounded-2xl" />
        </div>
    </div>
  )
}

export default BoostBrand;
