import React from "react";
import Cards from "./Cards";
const Tours = ({ tours,removeTour }) => {
  return (
    <div className="flex flex-col ">
      <div className=" w-[20vw] font-bold text-3xl self-center border-dashed  border-5 pl-5 m-4" >
        <h1 className=""> Plan with Ganesh</h1>
      </div>
      <div className="justify-center w-[50vw] flex gap-10 flex-wrap">
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
