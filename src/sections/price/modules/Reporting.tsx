import React from 'react'
import Board from '../boards/Board';
import Board2 from '../boards/Board2';
import SendusEmail from '../SendusEmail';
import { reporting, reportData } from '../../../constant/data';
import Extras from '../boards/Extras';

const Reporting = () => {
  return (
    <div className="flex flex-col">
        <div className='flex gap-2 mt-[40px]'>
            <Board text='Reporting' data={reporting} className='w-[300px]' />
            {
            reportData.map((data) => (
                <Board2 className={`w-[200px]`} data={data} others/>
            ))
        }
            <SendusEmail/>
        </div>

        <Extras text='Support'/>
        <Extras text='Extras'/>
    </div>
  )
}

export default Reporting;
