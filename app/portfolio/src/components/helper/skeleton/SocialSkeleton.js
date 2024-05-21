import React from 'react'
import { FaRegCircleRight } from "react-icons/fa6";

const SocialSkeleton=()=>{
  return (
    <div className="flex anime-pulse flex-col container shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md">
        <div className="flex anime-pulse justify-between">
        <h1 className='text-gray-400 anime-pulse'>Social</h1>
        <button className='border anime-pulse border-solid border-gray-400 rounded-md px-1 m-1'>Add Social</button>
        </div>
        <form  className=' items-start anime-pulse space-y-2 flex flex-col'>
          <div className=' flex flex-col anime-pulse '>
          <div className='grid grid-cols-2 anime-pulse sm:grid-cols-4 space-x-2 sm:space-y-1'>
          <label htmlFor="title">Title</label>
          <input type="text" required  id="title" className=" bg-gray-300 anime-pulse border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="link">Link</label>
          <input type="text" required id="link" className=" bg-gray-300 anime-pulse border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>
          </div>
        
          <div className="space-y-1">
           <button type="submit" className="px-4 bg-green-700 w-fit  anime-pulse rounded-md">
          ...    </button>
      
          </div>
        </form>
        
        <button className='w-fit' ><FaRegCircleRight  className='size-5 anime-pulse text-blue-500'/> </button>
       <div className="flex flex-row   rounded-md w-full h-full anime-pulse bg-transparent border border-solid border-black shadow-md">
        <ul className=" grid grid-cols-1 place-items-center anime-pulse  w-full mt-1 mb-1  sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-1     overflow-y-auto ">
   
     
        <li className=' shadow-2xl border mb-1 mt-1  anime-pulse border-solid border-gray-500  space-y-1 sm:space-y-0 sm:space-x-1 rounded-md w-56 h-24 items-center flex flex-col justify-center'>

          <h2 className='underline px-1 rounded-sm anime-pulse text-blue-950'>...</h2>
          <h3 className='border-solid text-clip anime-pulse h-20 mx-2 font-normal border-gray-400  rounded-sm'>...</h3>
          <div className={`block`}>
            
            <button className='border border-solid anime-pulse bg-red-800 border-gray-400 px-1 rounded-md'>Delete</button>
          </div>
        </li>
         
        </ul>
   </div>
      </div>
  )
}

export default SocialSkeleton
