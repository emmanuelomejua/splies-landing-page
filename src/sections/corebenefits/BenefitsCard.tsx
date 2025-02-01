import React from 'react'
import P from '../../components/P';
import { benefit1 } from '../../constant/images';


const BenefitsCard = () => {
  return (
    <div className='bg-[#E5F6F466] flex flex-col gap-4 w-[540] h-[450px] rounded-[8px]'>
        <div className="flex flex-col p-4">
            <h4 className='font-semibold font-600 leading-[32px]'>Online bookings</h4>
            <P text='Say goodbye to pen and paper or clunky software - Splice provides the easiest way for your customers to book appointments. Accept bookings anytime.' className='' />
        </div>

        <img src={benefit1} alt="" className="h-[300px]" />
    </div>
  )
}

export default BenefitsCard;
