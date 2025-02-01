import React, { FC, useState } from 'react';

type INavBtn = {
    isActive?: string
}


const SubMenu:FC<INavBtn> = ({isActive}) => {
    
    const names = ['Quarterly', 'Biannually', 'Annually'];

    const [active, setActive] = useState<string>(isActive || names[0]);
    
  return (
    <div className="flex flex-col">
    <div className='flex items-center justify-between w-[500px] gap-7'>
        {names.map((name) => (
            <div className="flex flex-col gap-2 justify-center items-center" onClick={() => setActive(name)}>
                <span className={`text-[14px] font-semibold font-[500] leading-[19px] ${
                  active === name ? 'text-Green' : 'text-[#9AA2A5]' }`}
                >{name}</span>
                {active === name && <hr className='bg-Green h-1 w-[135px]'/>}
            </div>
        ))}
    </div>
     <hr className='h-1 w-full'/>
    </div>
  )
}

export default SubMenu;


//will just create a span and a hr as appropriate,display it flex and chane colors and bg on click