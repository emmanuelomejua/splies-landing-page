import React from 'react'

const ListCard = () => {
  return (
    <div className='flex gap-4'>
        <div className="h-[28px] w-[28px] border-[1px] rounded-[2px] flex items-center justify-center">
            <img src="/foryou/on-time.svg" alt="" className="h-[15px] w-[15px]" />
        </div>

        <div className="flex flex-col gap-1">
            <h4 className='text-[#777676] font-[600] text-[16px]'>Reduce Missed Appointments</h4>
            <p className='text-[#777676] font-[500] text-[16px]'>Improve client retention and scheduling efficiency.</p>
        </div>
    </div>
  )
}

export default ListCard;
