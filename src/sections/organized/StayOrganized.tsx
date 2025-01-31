import React from 'react'
import H1 from '../../components/H1';
import P from '../../components/P';

const StayOrganized = () => {
  return (
    <div className='bg-Green flex flex-col justify-center items-center'>

        <div className="flex flex-col gap-2 w-[650px] justify-center items-center text-center mt-[50px]">
            <H1 text='Stay Organized with a Unified Appointment Calendar' className='text-White2'/>
            <P text='Effortlessly view and manage all bookings, assign staff to open slots, and track appointment statuses for smooth operations.'  className='text-White2' />
        </div>
    </div>
  )
}

export default StayOrganized;
