import React from "react";
import Board from "./Board";


const Features = () => {
  return (
    <div className="flex gap-4 ">
        <Board/>
        <Board header/>
        <Board header/>
        <Board header/>
        <Board header/>
        <Board header/>
    </div>
  );
};

export default Features;
