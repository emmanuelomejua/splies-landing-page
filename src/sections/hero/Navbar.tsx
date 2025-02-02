import React, { useState } from 'react'
import NavBtn from '../../components/buttons/NavBtn';
import Button from '../../components/buttons/Button';


const Navbar = () => {


  const resources = ['Blog', 'Contact support', 'About', 'Get a demo'];
  const splice = ['For You', 'For your business', 'For your customers']

  const [card, setCard] = useState(false);
  const [card1, setCard1] = useState(false);


  return (
    <div className='h-[80px] w-full flex items-center shadow-lg bg-[#19302A]'>
        <div className="max-w-[1200px] w-full flex items-center mx-auto h-full justify-between">
            <img src="/icons/logo.svg" alt="" className="h-[33px] w-[70px]" />

            <div className="flex items-center gap-[40px] relative">
                <NavBtn text='Benefits' />

                <NavBtn 
                  text='Why Splice' 
                  onMouseEnter={() => setCard(true)}
                  onMouseLeave={() => setCard(false)}
                  img/>

                <NavBtn text='Resources' 
                   onMouseEnter={() => setCard1(true)}
                   onMouseLeave={() => setCard1(false)}
                  img/>


                  {card && <div className="flex flex-col absolute top-[50px] right-0 left-[80px] w-max p-[13px] rounded-[10px] bg-White2 text-[#19302A] gap-[10px] font-[500] font-semibold">
                    {splice.map((p) => (
                      <span className="">{p}</span>
                    ) )}
                  </div>}

                  {card1 && <div className="flex flex-col absolute top-[50px] -right-[40px] w-max p-[13px] rounded-[10px] bg-White2 text-[#19302A] gap-[10px] font-[500] font-semibold">
                    {resources.map((p) => (
                      <span className="">{p}</span>
                    ) )}
                  </div>}
            </div>

            <div className="flex items-center gap-[10px]">
                <Button text='Login' className='text-White2 bg-transparent border-White border-[1px]'/>
                <Button text='Get Started' className='text-Green bg-White2'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
