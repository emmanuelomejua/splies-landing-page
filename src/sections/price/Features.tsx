import React from "react";
import Board from "./Board";
import Board2 from "./Board2";
import { headingData } from '../../constant/data'


const Features = () => {
  return (
    <div className="flex gap-4 ">
        <Board text="Booking" className="w-[240px]"/>
        {
            headingData.map((data) => (
                <Board2 className={`w-[210px]`} data={data}/>
            ))
        }
    </div>
  );
};

export default Features;
