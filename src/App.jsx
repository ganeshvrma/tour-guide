import React, { useState } from "react";
import "./App.css";
import Tours from "./Components/Tours";
import Data from "./Data";

function App() {
  const [tours, setTours] = useState(Data);

  // Function to remove a tour from the list
  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };
   if(tours.length === 0){
    return (
     < div className="h-[100vh] flex justify-center items-center flex-col">
      <h1 className="font-semibold">No Tours left</h1>
      <button className="mt-5 py-2 px-20 border-2 border-brown  rounded-2xl hover:bg-white color:#000 transition-all .2s" onClick={() => setTours(Data)}>Refresh</button>
      </div>
    );
    
   }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4" >
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;





// function App(){
//   const [change,setChange]=useState("red");
  
  
//   return(

//     <div className="w-full h-screen" style={{backgroundColor:change}}>
      
//       <button onClick={()=>setChange("blue")}>blue </button>
//       <button onClick={()=>setChange("green")}>green</button>
//       <button onClick={()=>setChange("yellow")}>yellow</button>
      
//     </div>
//   );


// }
// export default App;