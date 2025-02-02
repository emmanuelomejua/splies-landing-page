import React from 'react';
import Board from '../boards/Board';
import Board2 from '../boards/Board2';
import { payment, paymentData } from '../../../constant/data';
import SendusEmail from '../SendusEmail';


const Payment = () => {
  return (
    <div className='flex gap-2 mt-[40px]'>
        <Board text='Payment' data={payment} className='w-[280px]'/>
        {
            paymentData.map((data) => (
                <Board2 className={`w-[200px`} data={data} others />
            ))
        }
        <SendusEmail/>
    </div>
  )
}

export default Payment;
