import React from 'react';
import { forYou } from '../../constant/images';
import ListCard from './ListCard';

const ForYou = () => {
  return (
    <div className='max-w-[1200px] w-full mx-auto h-[850px] justify-center items-center'>
        <div className="flex gap-[100px] h-full">
            <div className="my-auto relative flex-1">
                <img src={forYou} alt="" className="h-[531px] w-[570px] border-[2px] rounded-[8px]" />

            </div>

            <div className="flex flex-1 flex-col justify-center h-full gap-5">
                <div className="flex flex-col justify-center gap-2">
                    <span className="rounded-full border-[1px] text-Green py-[10px] px-[24px] font-[500] text-sm w-max">FOR YOU</span>
                    <h1 className='font-[600] text-[45px] text-[#001914]'>Increase bookings by up to 25%</h1>
                    <p className='text-[#656565] font-[500] text-[16px]'>Splice boosts salon and wellness bookings by up to 25%, reduces missed appointments, and increases revenue. </p>
                </div>

                <div className="flex flex-col mt-2 gap-3">
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForYou;
