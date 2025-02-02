import React from "react";
import Board from "./Board";
import Board2 from "./Board2";
import { headingData, headers } from '../../constant/data'


const Features = () => {
  return (
    <div className="flex gap-3 mt-[40px]">
        <Board text="Booking" className="w-[260px]" data={headers} isFeature/>
        {
            headingData.map((data) => (
                <Board2 className={`w-[200px]`} data={data} isBooking/>
            ))
        }
    </div>
  );
};

export default Features;
