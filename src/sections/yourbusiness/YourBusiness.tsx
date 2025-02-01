import React from 'react';
import Box from '../../components/Box';
import { yourBizData } from '../../constant/data';
import { summary } from '../../constant/images';


const YourBusiness = () => {

  return (
    <div className='my-[50px]'>
        <div className="flex gap-[150px] w-full max-w-[1250px] ml-auto items-center">
            <div className="flex-1">
              <Box data={yourBizData} text='FOR YOUR BUSINESS' text1='Streamline your operations with Splice' text2='Efficiently manage staff, gain actionable business insights, and handle Catalogue seamlessly.'/>
            </div>

            <div className="flex-1">
              <img src={summary} alt="" className="h-[672px]" />
            </div>
        </div>
    </div>
  )
}

export default YourBusiness;
