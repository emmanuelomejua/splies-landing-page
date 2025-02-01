import React, { FC } from 'react'
import Card from './Card';
import Title from './Title';
import Header from './Header';



type BType = {
    header?: boolean;
}

const Board:FC<BType> = ({header}) => {
  return (
    <div className='flex flex-col gap-4 bg-[#C34C2A0A] rounded-[4px] p-[10px] w-[200px]'>
        <Title title=''/>
        {header && <Header/>}
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Board;
