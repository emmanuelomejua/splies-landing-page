import React from 'react'
import Board from '../boards/Board';
import SendusEmail from '../SendusEmail';

const Reporting = () => {
  return (
    <div className='flex gap-2 mt-[40px]'>
        <Board text='Reporting' data={[]} className='' />
        <SendusEmail/>
    </div>
  )
}

export default Reporting;
