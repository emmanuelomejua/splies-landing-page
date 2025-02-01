import React from 'react'
import H1 from '../../components/H1';
import P from '../../components/P';
import { calenda, bizperformance } from '../../constant/images';



const StayOrganized = () => {
  return (
    <div className='bg-Green flex flex-col justify-center items-center h-[850px] overflow-y-hidden'>

        <div className="flex flex-col gap-2 w-[650px] justify-center items-center text-center mt-[50px]">
            <H1 text='Stay Organized with a Unified Appointment Calendar' className='text-White2'/>
            <P text='Effortlessly view and manage all bookings, assign staff to open slots, and track appointment statuses for smooth operations.'  className='text-White2' />
        </div>

        <div className="mt-auto flex relative">
            <img src={calenda} alt="" className="w-[1000px] h-[660px] bottom-0 right-0 left-0" />
            <img src={bizperformance} alt="" className="w-[421px] h-[670px] absolute right-[-40px] bottom-0" />
        </div>
    </div>
  )
}

export default StayOrganized;
