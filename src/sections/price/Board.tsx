import React from 'react'
import Card from './Card';
import Title from './Title';

const Board = () => {
  return (
    <div className='flex flex-col gap-4 bg-[#C34C2A0A] rounded-[4px] p-[10px] w-[200px]'>
        <h1>Features</h1>
        <Title/>
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
