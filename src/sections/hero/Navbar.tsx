import React from 'react'
import NavBtn from '../../components/buttons/NavBtn';
import Button from '../../components/buttons/Button';

const Navbar = () => {
  return (
    <div className='h-[80px] w-full flex items-center shadow-lg bg-[#19302A]'>
        <div className="max-w-[1200px] w-full flex items-center mx-auto h-full justify-between">
            <img src="/icons/logo.svg" alt="" className="h-[33px] w-[70px]" />

            <div className="flex items-center gap-[40px]">
                <NavBtn text='Benefits'/>
                <NavBtn text='Why Splice' img/>
                <NavBtn text='Resources' img/>
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
