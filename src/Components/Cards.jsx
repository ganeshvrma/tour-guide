import React, { useState } from 'react'
const Cards = ({id,name,info,image,price,removeTour }) => { 
    const [readMore,setReadMore] =useState(false)
    
    const description = readMore? info : `${info.substring(0, 200)}...`  // Toggle between full and truncated description
    const handleReadMore = () => {
      setReadMore(!readMore)
    }
  
  return ( 
    <div   className='w-[400px] h-[max-content] flex flex-col border-2 p-[1rem] flex-wrap m-[1rem] rounded-[10px] items-center '>
      <div className=''>
      <img className='w-[300px] h-[40vh] object-cover aspect-(1/1) ' src={image} alt="" />
      </div>
         
        <div className='font-semibold w-full flex flex-col'>
          <h3 className='text-[1.3rem]  text-[#1faa59]'>₹{price}</h3>
          <h2 className='text-[1.5rem]'>{name}</h2>
        </div>
        <div className='m-3'>
           {description}
               <span onClick={handleReadMore}>
                {readMore ?"Show less":"Read more"}
               </span><br/>
        <button onClick={() =>removeTour(id)  } className=' px-5 py-3 bg-amber-200  rounded-2xl m-2'>Not Interested</button>
        </div>
    </div>
  )
}

export default Cards