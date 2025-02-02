import React from 'react'
import Board from '../Board';
import { clientmgt } from '../../../constant/data';
import SendusEmail from '../SendusEmail';

const ClientMgt = () => {
  return (
    <div className='flex gap-2 mt-[40px]'>
         <Board text='Client management' data={clientmgt} className='w-[280px]'/>
         <SendusEmail/>
    </div>
  )
}

export default ClientMgt;
