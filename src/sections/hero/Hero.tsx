import React from 'react'
import Navbar from './Navbar';
import { HeroImage, heroFrame } from '../../constant/images';
import Button from '../../components/buttons/Button';



const Hero = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${HeroImage})`, 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundColor: '#032721' }} 
      className={`w-full h-[850px]`}>
      <Navbar/>

      <div className="flex max-w-[1200px] w-full mx-auto h-full gap-[40px]">
        <div className="flex flex-[2] flex-col gap-[20px] justify-center items-center">
          <h1 className='font-[600] text-[60px] text-White2'>Africa's all-in-one booking, payment & business management solution</h1>

          <p className='text-[#EEEEEE] text-[18px]'>All-in-one booking software to grow your business in Africa. Book appointments, manage clients, get paid - all in one place.</p>

          <div className="flex items-center gap-6 justify-start self-start">
            <Button text='Get Started' className='text-Green bg-White2 w-[200px]'/>
            <Button text='Login' className='text-White2 bg-transparent border-White border-[1px] w-[200px]'/>
          </div>
        </div>

        <div className="flex-1 flex justify-between ">
          <div className=""></div>
          <img src={heroFrame} alt="" className="mt-auto mb-[100px] bg-White2" />
        </div>

      </div>
    </div>
  )
}

export default Hero;
