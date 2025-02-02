import React from 'react'
import Board from '../boards/Board';
import Board2 from '../boards/Board2';
import SendusEmail from '../SendusEmail';
import { teamMgt, teamMgtData } from '../../../constant/data';

const TeamMgt = () => {
  return (
    <div className='flex gap-2 mt-[40px]'>
        <Board text='Team Management' data={teamMgt} className='w-[300px]'/>
        {
            teamMgtData.map((data) => (
                <Board2 className={`w-[200px]`} data={data} others/>
            ))
        }
        <SendusEmail/>
    </div>
  )
}

export default TeamMgt;
