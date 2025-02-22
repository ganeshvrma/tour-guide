import React, { useState } from 'react'
const Cards = ({id,name,info,image,price,removeTour }) => { 
    const [readMore,setReadMore] =useState(false)
    
    const description = readMore? info : `${info.substring(0, 200)}...`  // Toggle between full and truncated description
    const handleReadMore = () => {
      setReadMore(!readMore)
    }
  
  return ( 
    <div  className='w-[40vh] h-[100vh] flex flex-col border-2 p-4 '>
      <div className=''>
      <img className='w-full h-[40vh] object-cover ' src={image} alt="" />
      </div>
         
        <div className='font-semibold w-full flex flex-col'>
          <h3>₹{price}</h3>
          <h2 className=''>{name}</h2>
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