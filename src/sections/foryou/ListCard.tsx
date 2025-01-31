import React from 'react';


type CardType = {
  icon: string;
  title: string;
  text: string
}

const ListCard = ({item}: {item: CardType} ) => {
  return (
    <div className='flex gap-4'>
        <div className="h-[28px] w-[28px] border-[1px] rounded-[2px] flex items-center justify-center">
            <img src={item.icon} alt="" className="h-[20px] w-[20px]" />
        </div>

        <div className="flex flex-col gap-1">
            <h4 className='text-[#777676] font-[600] text-[16px] font-semibold'>{item.title}</h4>
            <p className='text-[#777676] font-[500] text-[16px] font-regular'>{item.text}</p>
        </div>
    </div>
  )
}

export default ListCard;
