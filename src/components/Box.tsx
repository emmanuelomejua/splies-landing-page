import React, { FC } from 'react'
import Title from './Title';
import H1 from './H1';
import P from './P';
import ListCard from '../sections/foryou/ListCard';



interface BoxType {
    text: string;
    text1: string;
    text2: string;
    data: any[]
}

const Box: FC<BoxType> = ({text, text1, text2, data}) => {
  return (
    <div className="flex flex-col">
        <div className='flex flex-col justify-center gap-2'>
             <Title text={text}/>
            <H1 text={text1}  />
            <P text={text2} className='text-[#656565]'/>
        </div>

        <div className="flex flex-col mt-2 gap-3">
            { data.map((item: any) => (
                <ListCard item={item} key={item}/>
            ))
            }
        </div>
    </div>
  )
}

export default Box;
