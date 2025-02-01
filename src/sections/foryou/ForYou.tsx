import React from 'react';
import { forYou, web } from '../../constant/images';
import { forYouData } from '../../constant/data';
import Box from '../../components/Box';


const ForYou = () => {
  return (
    <div className='max-w-[1200px] w-full mx-auto h-[850px] justify-center items-center'>
        <div className="flex gap-[100px] h-full">
            <div className="my-auto relative flex-1 flex">
                <img src={forYou} alt="" className="h-[531px] w-[570px] border-[2px] rounded-[8px]" />
                <img src={web} alt="" className="z-[999] absolute bottom-[-30px] right-[-40px] border-[2px] border-Green rounded-[4px]"  />
            </div>

            <div className="flex flex-1 flex-col justify-center h-full gap-5">
                <Box text='FOR YOU' text1='Increase bookings by up to 25%' text2='Splice boosts salon and wellness bookings by up to 25%, reduces missed appointments, and increases revenue.' data={forYouData} />
            </div>
        </div>
    </div>
  )
}

export default ForYou;
