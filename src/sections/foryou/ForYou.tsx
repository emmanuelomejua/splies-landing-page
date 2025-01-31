import React from 'react';
import { forYou } from '../../constant/images';
import ListCard from './ListCard';
import { forYouData } from '../../constant/data';
import H1 from '../../components/H1';
import P from '../../components/P';
import Title from '../../components/Title';
import Box from '../../components/Box';


const ForYou = () => {
  return (
    <div className='max-w-[1200px] w-full mx-auto h-[850px] justify-center items-center'>
        <div className="flex gap-[100px] h-full">
            <div className="my-auto relative flex-1">
                <img src={forYou} alt="" className="h-[531px] w-[570px] border-[2px] rounded-[8px]" />

            </div>

            <div className="flex flex-1 flex-col justify-center h-full gap-5">
                <Box text='FOR YOU' text1='Increase bookings by up to 25%' text2='Splice boosts salon and wellness bookings by up to 25%, reduces missed appointments, and increases revenue.' data={forYouData} />
                {/* <div className="flex flex-col justify-center gap-2">
                    <Title text='FOR YOU' />
                    <H1 text='Increase bookings by up to 25%' className='text-[#001914]' />
                    <P text='Splice boosts salon and wellness bookings by up to 25%, reduces missed appointments, and increases revenue.' className='text-[#001914]'/>
                </div>

                <div className="flex flex-col mt-2 gap-3">
                    { forYouData.map((item) => (
                        <ListCard item={item}/>
                    ))
                    }

                </div> */}
            </div>
        </div>
    </div>
  )
}

export default ForYou;
