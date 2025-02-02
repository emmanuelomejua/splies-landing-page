import React from "react";
import Board from "../boards/Board";
import Board2 from "../boards/Board2";
import { headingData, headers } from '../../../constant/data'


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
