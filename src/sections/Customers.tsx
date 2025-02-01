import React from 'react'
import Box from '../components/Box';
import { yourBizData } from '../constant/data';
import { bookings, Bookings } from '../constant/images';



const Customers = () => {
  return (
    <div className='flex mt-[100px]'>
        <div className="flex w-full max-w-[1200px] mx-auto gap-[50px]">
            <div className="flex-1 relative flex">
                <img src={Bookings} alt="" className="w-[340px] h-[600px] z-20" />
                <img src={bookings} alt="" className="w-[320px] h-[500px] absolute bottom-[0] right-0" />
            </div>

            <div className="flex-1">
                <Box text='FOR YOUR CUSTOMERS' text1='Streamline your operations with Splice' text2='Efficiently manage staff, gain actionable business insights, and handle Catalogue seamlessly.' data={yourBizData} />
            </div>
        </div>
    </div>
  )
}

export default Customers;
