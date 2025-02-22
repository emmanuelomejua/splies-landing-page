import React from 'react'
import Board from '../boards/Board';
import { clientmgt, clientmgtData } from '../../../constant/data';
import SendusEmail from '../SendusEmail';
import Board2 from '../boards/Board2';
import Extras from '../boards/Extras';

const ClientMgt = () => {
  return (
    <div className="flex flex-col">
        <div className='flex gap-2 mt-[40px]'>
            <Board text='Client management' data={clientmgt} className='w-[300px]'/>
            {
                clientmgtData.map((data) => (
                    <Board2 className={`w-[200px]`} data={data} others/>
                ))
            }
            <SendusEmail/>
        </div>
        <Extras text='Marketing'/>
        <Extras text='Inventory Management'/>
    </div>
  )
}

export default ClientMgt;
