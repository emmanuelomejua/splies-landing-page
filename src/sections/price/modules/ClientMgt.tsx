import React from 'react'
import Board from '../boards/Board';
import { clientmgt, clientmgtData } from '../../../constant/data';
import SendusEmail from '../SendusEmail';
import Board2 from '../boards/Board2';

const ClientMgt = () => {
  return (
    <div className='flex gap-2 mt-[40px]'>
         <Board text='Client management' data={clientmgt} className='w-[280px]'/>
         {
            clientmgtData.map((data) => (
                <Board2 className={`w-[200px]`} data={data} others/>
            ))
        }
         <SendusEmail/>
    </div>
  )
}

export default ClientMgt;
