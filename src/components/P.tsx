import React from 'react';


export const P1 = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(' ');
  const lastWord = words.pop(); 
  const restOfText = words.join(' '); 
  
  return (
    <p className={`${className} font-[500] text-[16px] font-regular`}>
      {restOfText}{' '}
      <span className="text-green-500 italic">{lastWord}</span>
    </p>
  );
}

const P = ({text, className}: {text: string, className: string}) => {
  return (
    <p className={`${className} font-[500] text-[16px] font-regular`}>{text}</p>
  )
}

export default P;
