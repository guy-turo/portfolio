import React from 'react'

import { FaRegCircleRight } from "react-icons/fa6";

import { LuImagePlus } from "react-icons/lu";

const TestimonialSkeleton=()=>{
  
  return <div className="flex animate-pulse space-y-2 flex-col container shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md">
  <div className='flex justify-between animate-pulse'>
  <h1 className='text-gray-400 animate-pulse'>Testimonials</h1>
  <button className='border animate-pulse border-solid border-gray-400 rounded-md px-1 m-1'>Add Testimonial</button>
  </div>
  <div className={"block"}>
  <form  className={` items-start animate-pulse space-y-2 flex flex-col`}>
      <div className=' flex flex-col animate-pulse'>
      <div className='grid grid-cols-2 animate-pulse sm:grid-cols-4 space-x-2 sm:space-y-1'>
      <label htmlFor="name">Name</label>
      <input type="text" required id="name" className=" bg-gray-300 animate-pulse border rounded-md px-2 text-black border-solid border-blue-800"/>
     
      <label htmlFor="title">Title</label>
      <input type="text" required  id="title" className=" bg-gray-300 border animate-pulse rounded-md px-2 text-black border-solid border-blue-800"/>
     
      <label htmlFor="testimonial">Testimonial</label>
      <input type="text" required  id="testimonial" className=" bg-gray-300 animate-pulse border rounded-md px-2 text-black border-solid border-blue-800"/>
      </div>


      </div>
      <div >
          <label htmlFor='fi' className="flex animate-pulse w-full overflow-x-auto rounded-md shadow-md border border-solid border-gray-400 items-center space-x-2  cursor-pointer">
          <div className=" flex items-center  animate-pulse  rounded-md border border-solid border-blue-700">
            <LuImagePlus className="flex size-20 "/>
           
          </div>
          <h2 className="flex animate-pulse font-normal px-2">Select testimonial pictures</h2>
         </label>
        <input type="file" required multiple id='fi'  accept='image/*' hidden/>
        
      </div>
          <div className="space-y-1">
           <button type="submit" className="px-4 bg-green-700  animate-pulse w-fit rounded-md">
           ...    </button>
      
          </div>
    </form>
  </div>
   
    <button className='w-fit' >:<FaRegCircleRight  className='size-5 text-blue-500'/> </button>
    <div className=" animate-pulse rounded-md w-full h-full bg-transparent border border-solid border-black shadow-md">
    <ul className="animate-pulse grid grid-cols-1 place-items-center justify-center  w-full h-fit mt-1 mb-1  sm:grid-cols-1 md:grid-cols-2 px-1     overflow-y-auto ">
     
       
        <li  className='animate-pulse shadow-2xl border mb-1 mt-1 border-solid border-gray-500  space-y-1 sm:space-y-0 sm:space-x-1 rounded-md w-60 h-60 items-center flex flex-col justify-center'>
                <img  className="animate-pulse w-16 h-16  shadow-md rounded-md pb-1 border border-solid border-gray-500"/>
          <h2 className='underline animate-pulse px-1 rounded-sm text-blue-950'>...</h2>
          <h2 className='underline animate-pulse font-normal px-1 rounded-sm'>...</h2>
          <p className='border-solid animate-pulse px-1 text-wrap items-center flex justify-center h-fit mx-2 font-normal border-gray-500  rounded-sm'>...</p>
          <div className={`space-x-2 animate-pulse block`}>
         
            <button  className='border animate-pulse border-solid bg-red-800 border-gray-400 px-1 rounded-md'>Delete </button>
          </div>
        </li>
        
    </ul>
   </div>
    
  </div>
}

export default  TestimonialSkeleton