import React from "react";
import Cards from "./Cards";
const Tours = ({ tours,removeTour }) => {
  return (
    <div className="flex flex-col flex-flow-wrap justify-center items-center ">
      <div className="font-bold  w-[40vw] border-dashed  border-5 border-[#0111a0] rounded-2xl px-[5vw] py-[1vh] m-[5vh]" >
        <h1 className="  text-[3rem]"> Plan with Ganesh</h1>
      </div>
      <div className="justify-center flex gap-10 flex-wrap max-w-[100vw] m-[0-auto] ">
        {
        tours.map((tours) => (
          <Cards key={tours.id} {...tours} removeTour={removeTour} />
        ))
        }
      </div>
    </div>
  );
};

export default Tours;
