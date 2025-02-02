import React from 'react'
import Board from '../boards/Board';
import SendusEmail from '../SendusEmail';
import { teamMgt } from '../../../constant/data';

const TeamMgt = () => {
  return (
    <div className='flex gap-2 mt-[40px]'>
        <Board text='Team Management' data={teamMgt} className='w-[280px]'/>
        <SendusEmail/>
    </div>
  )
}

export default TeamMgt;
